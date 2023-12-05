import { useState } from 'react'

import axios from 'axios';

import Header from "./assets/components/Header.jsx";
import CityForm from "./assets/components/CityForm.jsx";
import Map from './assets/components/Map.jsx';

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);
function App() {

  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, seterror] = useState(null);

  function changeCity(newCity) {

    
    getLocation(newCity);

  
    console.log("Changing to", newCity);
  }


  async function getLocation(cityName) {

    
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
     
      setCity(response.data[0].display_name)

    
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);

    } catch (error) {
      console.error(error.message);
      seterror(
        `Error fetching location data. status Code: ${error.response?.status || "unknown"
        }. ${error.message}`
      )
    }

  }

  return (
    <>
      <Header />
      <CityForm city={city} handleChangeCity={changeCity} />
      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
      <Map latitude={latitude} longitude={longitude} />
    </>
  )
}

export default App