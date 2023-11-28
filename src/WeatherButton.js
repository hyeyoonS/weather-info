import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities }) => {
  console.log(cities);
  return (
    <div>
      {cities.map((item) => (
        <Button variant="warning">{item}</Button>
      ))}
    </div>
  );
};

export default WeatherButton;
