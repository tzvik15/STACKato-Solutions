import React from "react";
import rest from "../assets/pics/restFull.jpg";

function Rest() {
  return (
    <div className="body">
      <div className="contactbox" id="restBox">
        <img src={rest} alt="screenshot of restaurant app" id="restPic" />
        <h2>Flint'z Skinz</h2>
        <p className="break">
          A first Full Stack application that simulates a reservation system for
          a restaurant that only has five tables.
        </p>
        <p className="break">
          The user can make a reservation at the restaurant, view the current
          list of occupants in the restaurant, and see the JSON returned from
          both the current occupancy API and the waitlist API.
        </p>
        <p className="break">
          The user can navigate through the app using provided buttons, and make
          reservations by filling out the input fields. On submission, the data
          is stored in an array. The first 5 reservations are stored in one
          array, and any subsequant reservations are stored in another array (to
          simulate a wait list). Both arrays are linked as JSON in the home page
          of the app.{" "}
        </p>
        <h4>Technologies, Libraries, and API's used</h4>
        <p className="break">
          This application uses node.js with an Express server, jQuery,
          Bootstrap CSS, and Font Awesome.
        </p>
        <h4 className="break">
          GitHub repository:{" "}
          <a
            href="https://github.com/tzvik15/Hot-restauraunt-cold-food"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4 className="break">
          Deployed site:{" "}
          <a
            href="https://sheltered-bayou-19458.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Rest;
