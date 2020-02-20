import React from "react";
import flintz from "../assets/pics/flintzFull.jpg";

function Flintz() {
  return (
    <div className="body">
      <div className="contactbox" id="flintBox">
        <img src={flintz} alt="screenshot of Flintz app" id="flintPic" />
        <h2>Flint'z Skinz</h2>
        <p className="break">
          A full-stack interactive "paint-brush" style app following the ORM
          model that utilizes a SQL database to allow users to save and load
          past drawings. Drawings can be recreated as an illusion of stop-motion
          animation. Includes an outside API call for random background image.
        </p>
        <p className="break">
          The user chooses chooses the color they want to doodle with, and can
          draw upon the canvas.
        </p>
        <p className="break">
          When the "record" button is pressed, the user is prompted to enter a
          name for the recording. Then, once they start drawing on the canvas,
          for as long as the mouse is pressed (continous line drawing) the mouse
          coordinates are stored in an array 20 times/second. Once the user
          stops holding the mouse button, the recording functionality ends. At
          any time, users can press the "clear" button to clear the canvas. If a
          recording has been made (or loaded by pressing the "load" button and
          selecting from the available drawings), pressing the "play" button
          uses the array of coordinates to redraw the painting as it was painted
          (by procedurally drawing a line to the coordinates 10 times/second),
          creating the illusion of stop-motion animation. Pressing the "save"
          button will store the coordinates array, together with the color used
          and the name given in the global SQL database, allowing them to later
          be loaded by anyone accessing the app.
        </p>
        <h4>Technologies, Libraries, and API's used</h4>
        <p className="break">
          The main technology used in this application is HTML 5 Canvas.
          Additionally, it uses SQL with Sequelize, jQuery, P5.js & Materialize
          CSS libraries, and Unsplash API.
        </p>
        <h4 className="break">
          GitHub repository:{" "}
          <a
            href="https://github.com/c-frog/Paint-Brush"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4 className="break">
          Deployed site:{" "}
          <a
            href="https://flintz-skinz-2.herokuapp.com/"
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

export default Flintz;
