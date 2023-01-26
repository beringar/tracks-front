import gpxParser from "gpxparser";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Polyline,
  TileLayer,
  ZoomControl,
  Marker,
  LayersControl,
} from "react-leaflet";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { HStack, Stack, StackDivider, Text } from "@chakra-ui/react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

type TrackStats = {
  distance: { total: number };
  elevation: {
    avg: number;
    max: number;
    min: number;
    neg: number;
    pos: number;
  };
};

const MapComponent = ({ gpxUrl }): JSX.Element => {
  const [positionsGpx, setPositionsGpx] = useState<number[][]>();
  const [trackStats, setTrackStats] = useState<TrackStats>();

  useEffect(() => {
    (async () => {
      const gpxFile = await fetch(gpxUrl);
      const data = await gpxFile.text();
      const gpx = new gpxParser();
      gpx.parse(data);
      const positions = gpx.tracks[0].points.map((p) => [p.lat, p.lon]);
      setPositionsGpx(positions);
      setTrackStats({
        distance: gpx.tracks[0].distance,
        elevation: gpx.tracks[0].elevation,
      });
    })();
  }, [gpxUrl]);

  return (
    <>
      {trackStats && (
        <>
          <HStack justify={"space-evenly"} wrap={"wrap"}>
            <Text>
              Total distance: {(trackStats.distance.total / 1000).toFixed(2)} Km
            </Text>
            <Text>Max elevation: {Math.ceil(trackStats.elevation.max)} m</Text>
            <Text>Min elevation: {Math.ceil(trackStats.elevation.min)} m</Text>
          </HStack>
        </>
      )}
      {positionsGpx && (
        <MapContainer
          bounds={positionsGpx}
          scrollWheelZoom={false}
          style={{ height: "70vh", width: "100%" }}
          zoomControl={false}
        >
          <LayersControl>
            <LayersControl.BaseLayer checked name="OpenStreetMap Mapnik">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OSM Topographic">
              <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stamen Terrain">
              <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="ESRI Topo Map">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="ESRI Satellite">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
          </LayersControl>

          <Polyline
            pathOptions={{ fillColor: "red", color: "blue" }}
            positions={positionsGpx}
          />
          <ZoomControl position="bottomleft" />
          <Marker position={positionsGpx[0]}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default MapComponent;
