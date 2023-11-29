import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div>
      <Button onClick={() => handleCityChange('current')}>Current Location</Button>
      {cities.map((item) => (
        <Button variant="warning" onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
