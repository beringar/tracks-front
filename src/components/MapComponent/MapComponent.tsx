import gpxParser from "gpxparser";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Polyline,
  TileLayer,
  ZoomControl,
  Marker,
} from "react-leaflet";
import { Icon } from "leaflet";

const MapComponent = ({ gpxUrl }): JSX.Element => {
  const [positionsGpx, setPositionsGpx] = useState<number[][]>();

  const startIcon = new Icon({
    iconUrl: "/img/starttrack.svg",
    iconSize: [25, 25],
  });

  useEffect(() => {
    (async () => {
      const gpxFile = await fetch(gpxUrl);
      const data = await gpxFile.text();
      const gpx = new gpxParser();
      gpx.parse(data);
      const positions = gpx.tracks[0].points.map((p) => [p.lat, p.lon]);
      //((gpx.tracks[0].distance.total / 1000).toFixed(2));
      setPositionsGpx(positions);
    })();
  }, [gpxUrl]);

  return (
    <>
      {positionsGpx && (
        <MapContainer
          bounds={positionsGpx}
          scrollWheelZoom={false}
          style={{ height: "80vh", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline
            pathOptions={{ fillColor: "red", color: "blue" }}
            positions={positionsGpx}
          />
          <ZoomControl position="bottomleft" />
          <Marker position={positionsGpx[0]} icon={startIcon}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default MapComponent;
