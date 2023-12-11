import { useState } from "react";
import axios from "axios";
import Header from "./assets/components/Header/Header.jsx";
import CityForm from "./assets/components/Form/CityForm.jsx";
import Map from "./assets/components/Map/Map.jsx";
import Weather from "./assets/components/Weather/Weather.jsx";
import Error from "./assets/components/Error/Error.jsx";
import Movies from './assets/components/Movies/Movies.jsx';
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API = import.meta.env.VITE_API;
const MOVIE_API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);

  function changeCity(userCity) {
    grabCityData(userCity);
  }

   async function grabCityData(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      setSelectedCity(response.data[0].display_name);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
      grabWeatherData(response.data[0].lat,response.data[0].lon);
      let movieCity = (response.data[0].display_name.split(' '));
      grabMovieData(movieCity[0].slice(0, -1));
    } catch (error) {
      setShow(true);
      let errorMessage = error.message;
      setError(errorMessage)
      console.error(errorMessage);
    }
  }
  
  async function grabWeatherData(latitude, longitude) {
    try {
      let response = await axios.get(VITE_API, { params: { "latitude": latitude, "longitude": longitude } });
      setWeather(response.data.Forecast);
      console.log(response.data.Forecast);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setShow(true);
      setError("Error fetching weather data. Please try again.");
    }
  }

  async function grabMovieData(cityName) {
    try {
      let response = await axios.get(MOVIE_API_KEY, { params: { "city": cityName } });
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching movie data:", error.message);
      setShow(true);
      setError("Error fetching movie data. Please try again.");
    }
  }



  return (
    <>
      <div className="body">
      <Header />
        <CityForm
          latitude={latitude}
          longitude={longitude}
          selectedCity={selectedCity}
          changeCity={changeCity}
          grabWeatherData={grabWeatherData}
        />
        <Map
          selectedCity={selectedCity}
          latitude={latitude}
          longitude={longitude}
        />
          <h2 className="forecastHeading">Your 7 Day Forecast</h2>
        <div className="weatherSection">
        <Weather weather={weather} selectedCity={selectedCity}/>
        </div>
        <h2 className="movieHeading" style={{display: `${show}`}}>Your Top 20 Movies</h2>
        <div className="movieSection" >
       <Movies movies ={movies} />

        </div>
        
        <Error show={show} errorMessage={error}/>
      </div>
    </>
  );
}

export default App;
