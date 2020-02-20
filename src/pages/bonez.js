import React from "react";
import bonez from "../assets/pics/bonezfull.jpg"

function Bonez() {
  return (
    <div className="body">
      <div className="contactbox" id="bonezBox">
        <img
          src={bonez}
          alt="screenshot of Bonez app"
          id="bonezPic"
        />
        <h2>Bone'z Beats</h2>
        <p className="break">
          An interactive soundboard with a recording functionality, and API
          calls for a random Kanye West quote, and song lyric retrival. Includes
          a text-to-speak functionality.
        </p>
        <p className="break">
          The user chooses from a preloaded library of sound effects, and drags
          them to a key of choice on the virtual keyboard. Once a sound has been
          assigned, pressing the corresponding key in the user's physical
          keyboard plays the assigned sound.
        </p>
        <p className="break">
          When the "record" button (the red circle) is pressed, the user has 10
          seconds to play any sounds they like from the buttons they assigned.
          They can click the "stop" button to end recording before the time has
          passed. While recording is taking place, the skeleton below the
          buttons will dance. Upon clicking the "play" button, the recording
          will play back.
        </p>
        <h4>Technologies, Libraries, and API's used</h4>
        <p className="break">
          This application uses HTML 5 Drag and Drop functionality, jQuery,
          Bulma CSS, Artyom.js library, and Musixmatch & Kanye.rest APIs.
        </p>
        <h4 className="break">
          GitHub repository:{" "}
          <a href="https://github.com/tzvik15/Bonez-Beatz" target="_blank" rel="noopener noreferrer">
            HERE
          </a>
        </h4>
        <h4 className="break">
          Deployed site:{" "}
          <a href="https://tzvik15.github.io/Bonez-Beatz/" target="_blank" rel="noopener noreferrer">
            HERE
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Bonez;