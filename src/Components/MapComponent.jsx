import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';





const MapComponent = () => {
    const position = [28.4962, 77.0830];


  
return (
      <MapContainer center={position} zoom={12} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>
            A marker at the initial map position. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  
export default MapComponent