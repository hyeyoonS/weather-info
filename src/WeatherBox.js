import React from 'react';
import styled from 'styled-components';

const WeatherBox = ({ weather }) => {
  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <WeatherInfoContainer>
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp} / {celsiusToFahrenheit(weather?.main.temp)}
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </WeatherInfoContainer>
  );
};

export default WeatherBox;

const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid white;
  padding: 50px 100px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;
