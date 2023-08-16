import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../CSS/Home1.css'

const MapComponent = () => {
    const position = [28.453432537750142, 77.06834227116423];




return (
      <MapContainer className='mapBox' center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>
            Zenoo <br /> Where world connects
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  
export default MapComponent

