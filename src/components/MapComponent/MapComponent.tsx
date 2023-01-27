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
import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FiArrowDownRight, FiArrowUpRight, FiEye } from "react-icons/fi";

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
          <HStack justify={"space-evenly"} wrap={"wrap"} mb={1}>
            <VStack spacing={0}>
              <Text color={"GrayText"} fontSize={"sm"}>
                Total distance
              </Text>
              <Text fontWeight={"bold"}>
                {(trackStats.distance.total / 1000).toFixed(2).toLocaleString()}{" "}
                Km
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text color={"GrayText"} fontSize={"sm"}>
                Max elevation
              </Text>
              <Text fontWeight={"bold"}>
                {Math.ceil(trackStats.elevation.max).toLocaleString()} m
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text color={"GrayText"} fontSize={"sm"}>
                Min elevation
              </Text>
              <Text fontWeight={"bold"}>
                {Math.ceil(trackStats.elevation.min).toLocaleString()} m
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text color={"GrayText"} fontSize={"sm"}>
                Elevation gain
              </Text>
              <HStack>
                <Icon as={FiArrowUpRight} color="green.400" strokeWidth={3} />
                <Text fontWeight={"bold"}>
                  {Math.ceil(trackStats.elevation.pos).toLocaleString()} m
                </Text>
              </HStack>
            </VStack>
            <VStack spacing={0}>
              <Text color={"GrayText"} fontSize={"sm"}>
                Elevation loss
              </Text>
              <HStack>
                <Icon as={FiArrowDownRight} color="red.400" strokeWidth={3} />
                <Text fontWeight={"bold"}>
                  {Math.ceil(trackStats.elevation.neg).toLocaleString()} m
                </Text>
              </HStack>
            </VStack>
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
            <LayersControl.BaseLayer checked name="OpenStreetMap Base">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Standard ICGC">
              <TileLayer url="https://geoserveis.icgc.cat/styles/icgc_mapa_estandard/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Topo ICGC">
              <TileLayer url="https://tilemaps.icgc.cat/mapfactory/wmts/topo_suau/CAT3857/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Topo Classic ICGC">
              <TileLayer url="https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/topo/GRID3857/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Relief ICGC">
              <TileLayer url="https://tilemaps.icgc.cat/mapfactory/wmts/relleu/CAT3857/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OSM Topo">
              <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="ESRI Topo">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Ortofoto ICGC">
              <TileLayer url="https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/orto/GRID3857/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Orto Hybrid ICGC">
              <TileLayer url="https://geoserveis.icgc.cat/styles/icgc_orto_hibrida/{z}/{x}/{y}.png" />
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
