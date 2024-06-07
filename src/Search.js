import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onHotelsFound }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      query: `${city} hotels`,
      type: ['lodging']
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        onHotelsFound(results);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search Hotels</button>
    </div>
  );
};

export default Search;