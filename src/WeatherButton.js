import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">NewYork</Button>
      <Button variant="warning">Seoul</Button>
    </div>
  );
};

export default WeatherButton;
