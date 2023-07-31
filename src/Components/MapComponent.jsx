import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';





const MapComponent = () => {
    const position = [28.453432537750142, 77.06834227116423];


  
return (
      <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
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