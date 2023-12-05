import { useState } from 'react';

function CityForm(props) {
  const [typedInCity, setTypedInCity] = useState('');
  const [showHeading, setShowHeading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  function handleChange(e) {
    setShowHeading(false);
    setTypedInCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowHeading(true);

    
    const newLatitude = 40.7128; // New York City
    const newLongitude = -74.0060;

    setLatitude(newLatitude);
    setLongitude(newLongitude);

    props.handleChangeCity(typedInCity);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>What City Are You In?</span>
        <input onChange={handleChange} placeholder="Explore!" />
      </label>
      {
        showHeading && props.city && (
          <div>
            <h2>Information about {props.city} Below</h2>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
          </div>
        )
      }
    </form>
  );
}

export default CityForm;