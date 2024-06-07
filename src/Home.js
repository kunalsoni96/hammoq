import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const Home = () => {
  const [rentedData, setRentedData] = useState([]);

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => setRentedData(data))
      .catch(error => console.error('Error fetching rented data:', error));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '70%', height: '100vh' }}>
    <div id='buttons'>
      <Button variant="secondary">Rent</Button>
      <Button variant="secondary">Commercial</Button>
      <Button variant="secondary">PG</Button>
      <Button variant="secondary">Land</Button>
      </div>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {rentedData.map((item, index) => (
            <Marker key={index} position={[item.latitude, item.longitude]}>
              <Popup>
                {item.name} <br /> {item.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div style={{ width: '30%', height: '100vh', overflowY: 'scroll' }}>
        <h2 >Rented Data</h2>
        <ul>
          {rentedData.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;