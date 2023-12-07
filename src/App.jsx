import { useState } from 'react';
import CityForm from './assets/components/CityForm.jsx'
import Header from './assets/components/Header.jsx';
import Map from './assets/components/Map';
import Footer from './assets/components/Footer.jsx';
import Weather from './assets/components/Weather.jsx';

import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API;

function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')


  function changeCity(newCity) {
    getLocation(newCity);
  }
  const updateCity = (e) => {
    console.log(e)

    setSearchQuery(e.target.value);
  };


  async function getData(lat, lon, cityQuery) {
    try {
      let response = await axios.get(`${API}/weather?lat=${lat}&lon=${lon}&searchQuery=${cityQuery}`);
      console.log(response.data)
      setData(response.data);

    } catch (e) {
      console.error(e.message)
    }
  }



  async function getLocation(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      
      console.log(response.data)
      setCity(response.data[0].display_name)
      console.log(city)

      
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);

      let splitCity = response.data[0].display_name.split(',');
      let cityToSend = `${splitCity[0]}`;
      console.log(cityToSend)
      getData(latitude, longitude, cityToSend);



    } catch (error) {
      console.error(error.message)
      alert('Invalid city format')
    }
  }


  return (
    <>
      <Header></Header>
      <CityForm city={city} handleChangeCity={changeCity} longitude={longitude} latitude={latitude}></CityForm>
      <Map latitude={latitude} longitude={longitude}></Map>
      <Weather forecastData={data}/>
    </>
  )
}

export default App