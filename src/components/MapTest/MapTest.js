import { MapLibreMap, MlNavigationTools } from "@mapcomponents/react-core";

const MapTest = () => {
  return (
    <>
      <MapLibreMap
        mapId="map_1"
        options={{
          zoom: 8,
          style: "https://wms.wheregroup.com/tileserver/style/osm-bright.json",
          center: [7.0851268, 50.73884],
        }}
      />
      <MlNavigationTools mapId="map_1" />
    </>
  );
};

export default MapTest;
