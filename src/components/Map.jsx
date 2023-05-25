import React, { useContext, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { IpContext } from "../context.jsx/IpContext";
import L from "leaflet";

const Map = () => {
  const { location } = useContext(IpContext);
  const { latitude, longitude } = location || {};
  const mapRef = useRef(null);

  useEffect(() => {
    if (latitude && longitude) {
      if (!mapRef.current) {
        const map = L.map("myMap").setView([latitude, longitude], 12);
        mapRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "Map data &copy; OpenStreetMap contributors",
        }).addTo(map);
      } else {
        mapRef.current.setView([latitude, longitude], mapRef.current.getZoom());
      }

      if (mapRef.current) {
        L.marker([latitude, longitude]).addTo(mapRef.current);
      }
    }
  }, [latitude, longitude]);

  return <div id="myMap"></div>;
};

export default Map;
