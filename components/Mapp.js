import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVhdGJvYiIsImEiOiJja3hpZDVia3QxYnZjMnZucDUwanpjaXJvIn0.mkJRvY5sJA-ESQprAnaUaQ"; // Set your mapbox token here

function Mapp() {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 0.4702,
          longitude: 101.3662,
          zoom: 13,
          attributionControl: false,
        }}
        style={{ height: 550 }}
        mapStyle="mapbox://styles/beatbob/ckxid7ikt2dxb14legqb4dq2b"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={101.3662} latitude={0.4702} color="blue" />
      </Map>
    </div>
  );
}

export default Mapp;
