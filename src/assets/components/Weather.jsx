import React from 'react';

const Weather = (props) => {
  console.log("Forecast: ",props.forecast);
  console.log("City= ", props.city);
 
  return (
    <div className="weather-container">
      {props.forecast && (
        <div>
          <h2 className="mb-4">Weather Forecast for {props.city}</h2>
          <div className="row">
            {props.forecast.map((day, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Date: {day.date}</h5>
                    <p className="card-text">Description: {day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;