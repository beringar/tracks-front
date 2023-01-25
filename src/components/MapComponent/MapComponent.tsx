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

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const MapComponent = ({ gpxUrl }): JSX.Element => {
  const [positionsGpx, setPositionsGpx] = useState<number[][]>();

  useEffect(() => {
    (async () => {
      const gpxFile = await fetch(gpxUrl);
      const data = await gpxFile.text();
      const gpx = new gpxParser();
      gpx.parse(data);
      const distance = (gpx.tracks[0].distance.total / 1000).toFixed(2);
      const { avg, max, min, neg, pos } = gpx.tracks[0].elevation;
      const averageElevation = Math.ceil(avg);
      const positions = gpx.tracks[0].points.map((p) => [p.lat, p.lon]);
      setPositionsGpx(positions);
    })();
  }, [gpxUrl]);

  return (
    <>
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
