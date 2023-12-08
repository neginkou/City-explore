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
  const [forecast, setForecast] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')


  const updateCity = (e) => {
    console.log(e)

    setSearchQuery(e.target.value);
  };


  async function getData(lat, lon) {
    console.log(lat, lon);
    try {
      let response = await axios.get(`${API}/weather?lat=${lat}&lon=${lon}&searchQuery=${searchQuery}`);
      console.log(response.data);
      setForecast (response.data);
      console.log(forecast)
      setData(response.data);

    } catch (e) {
      console.error(e.message)
    }
  }



  async function getLocation() {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${searchQuery}&format=json`;
    try {
      let response = await axios.get(url);
      
      console.log(response.data)
      setCity(response.data[0].display_name)
      console.log(city)

      console.log(response.data[0].lat);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);

      console.log(latitude, longitude);
      getData(response.data[0].lat, response.data[0].lon);



    } catch (error) {
      console.error(error.message)
      alert('Invalid city format')
    }
  }


  return (
    <>
      <Header></Header>
      <CityForm city={city} handleChangeCity={getLocation} handleUpdateCity={updateCity} searchQuery= { searchQuery} longitude={longitude} latitude={latitude}></CityForm>
      <h2>{city}</h2>
      <Map latitude={latitude} longitude={longitude}></Map>
      <Weather forecastData={data} city={city}/>
    </>
  )
}

export default App