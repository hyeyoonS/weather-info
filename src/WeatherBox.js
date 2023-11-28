import React from 'react';
import styled from 'styled-components';

const WeatherBox = () => {
  return (
    <WeatherInfoContainer>
      <div>서울</div>
      <h2>30도 / 230화씨</h2>
      <h3>맑은 하늘</h3>
    </WeatherInfoContainer>
  );
};

export default WeatherBox;

const WeatherInfoContainer = styled.div`
  border: 3px solid white;
  padding: 50px 100px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;
