import React from "react";
import weather from "../assets/pics/weatherFull.jpg";

function Weather() {
  return (
    <div className="body">
      <div className="contactbox" id="weatherBox">
        <img src={weather} alt="screenshot of weather app" id="weatherPic" />
        <h2>Weather App</h2>
        <p className="break">
          An easy to use application for learning the weather in an inputed
          city.
        </p>
        <p className="break">
          This app allows the user to input a city name, and click a "submit"
          button. When the button is clicked, an API call goes out and the
          current weather in the selected city is dynamically displayed. Behind
          the scenes, two more API calls are triggered in a promisory sequance,
          the first displaying the UV index for the selected city, and the
          second offering a 5-day weather forecast.
        </p>
        <p className="break">
          Additional functionality is with a local storage method. Once a city
          is selected, the city is saved to local storage, up to five entries,
          and a new button is dynamically added to the page to allow for a
          quicker search. Upon page load, all unique items in local storage are
          dynamically added as buttons to the display.
        </p>
        <h4>Technologies, Libraries, and API's used</h4>
        <p className="break">
          This application uses jQuery, Bootstrap CSS, and Moment.js libraries.
        </p>
        <h4 className="break">
          GitHub repository:{" "}
          <a href="https://github.com/tzvik15/Weather-App" target="_blank" rel="noopener noreferrer">
            HERE
          </a>
        </h4>
        <h4 className="break">
          Deployed site:{" "}
          <a href="https://tzvik15.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">
            HERE
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Weather;
