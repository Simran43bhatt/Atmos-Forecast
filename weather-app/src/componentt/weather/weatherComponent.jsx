import React from 'react';
import './style.css';

const WeatherComponent = () => {
  const backgroundStyle = {
    background: "var(--color-dark) url('/weather/bg-sky.png') no-repeat center center fixed",
    backgroundSize: "cover",
    height: "100vh",
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div className="widget">
      
        <div className="weatherIcon">
       
        </div>
        <div className="weatherInfo">
          <div className="temperature">
          
          </div>
          <div className="description">
            <div className="weatherCondition">
             
            </div>
            <div className="place">
             
            </div>
          </div>
        </div>
        <div className="date">
         
        </div>
        <div className="extra-temp">
          <div className="extra-info-leftside">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;



