import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVhdGJvYiIsImEiOiJja3hpZDVia3QxYnZjMnZucDUwanpjaXJvIn0.mkJRvY5sJA-ESQprAnaUaQ"; // Set your mapbox token here

function Mapp() {
  return (
    <div className="relative">
      <Map
        initialViewState={{
          latitude: 0.4702,
          longitude: 101.3662,
          zoom: 6,
          attributionControl: false,
        }}
        style={{ height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={101.3662} latitude={0.4702} color="gray" />
      </Map>

      <div className="absolute w-52 h-26 sm:w-60 sm:h-36 bg-[#0a192fd2] top-3 left-3 p-2">
        <p className="font-sans font-semibold text-white text-sm sm:text-base">
          Pekanbaru Riau, Indonesia. JL.Garuda Sakti Km.1, 28293 Bina Widya.
        </p>
        <a
          href="mailto:mrobichaniago@gmail.com"
          target="blank"
          className="font-sans font-semibold text-white mt-4 block hover:text-[#64ffda] text-sm sm:text-base"
        >
          <span className="text-cyan-400">@: </span>mrobichaniago@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Mapp;
