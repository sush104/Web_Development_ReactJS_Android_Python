import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./Data/skateboard-parks.json";
import "./Map.css";

export default function App() {
  const [activePark, setActivePark] = React.useState(null);
  const position = [55.882309, -4.270780]
  return (
    <MapContainer center={position} zoom={100} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Bike
      </Popup>
    </Marker>
  </MapContainer>
  );
}
