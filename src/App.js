import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import WeatherBox from './WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader';

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
//2. 날씨정보: 도시, 섭씨, 화씨, 날씨 상태
//3. 5개의 버튼 - 1개는 현재 위치, 나머지는 다른 도시
//4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
//5. CurrentLocation => 현재 위치 기반의 날씨가 나온다.
//6. 데이터를 들고 오는 동안 로딩 스피너가 보인다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const cities = ['paris', 'new york', 'tokyo'];

  const handleCityChange = (city) => {
    if (city === 'current') {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4dc587cb12c335777b59a25ea4968d6&units=metric`;
    setLoading(true);
    let response = await axios.get(url);
    let data = response.data;
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4dc587cb12c335777b59a25ea4968d6&units=metric`;
    setLoading(true);
    let response = await axios.get(url);
    let data = response.data;
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  return (
    <div className="App">
      {loading ? (
        <WeatherContainer>
          <ClipLoader color="#f88c6b" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        </WeatherContainer>
      ) : (
        <WeatherContainer>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange} />
        </WeatherContainer>
      )}
    </div>
  );
}

export default App;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
