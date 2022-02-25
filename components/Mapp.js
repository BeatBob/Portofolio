import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

function Mapp() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmVhdGJvYiIsImEiOiJja3hpZDVia3QxYnZjMnZucDUwanpjaXJvIn0.mkJRvY5sJA-ESQprAnaUaQ";

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/beatbob/ckxid7ikt2dxb14legqb4dq2b",
      center: [101.366342, 0.47027],
      zoom: 9,
      attributionControl: false,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="w-96 h-96" />
    </div>
  );
}

export default Mapp;
