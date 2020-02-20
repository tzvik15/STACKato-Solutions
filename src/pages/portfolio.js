import React from "react";
import bonez from "../assets/pics/bonez2.jpg";
import weather from "../assets/pics/weather.jpg";
import bassoon from "../assets/pics/bassoon.jpg";
import burger from "../assets/pics/BurgerFull.jpg";
import flintz from "../assets/pics/flintzFull.jpg";
import god from "../assets/pics/god.jpg";
import rest from "../assets/pics/restFull.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="back" id="portBack">
      <div className="contactbox" id="placeholders">
        <h2>
          Portfolio
          <hr />
        </h2>
        <div className="container" id="linkTwo">
          <img
            src={bonez}
            alt="bonez"
            style={{ width: 200, height: 200 }}
            className="linkpic"
          />
          <Link to="/bonez" className="btn1" id="btn1">
            Bone's Beatz
            <span id="bonezPop">
              A cusomizable sound board where the user assigns sound effects to
              buttons on a virtual keyboard, and plays them back by clicking the
              corresponding button on their physical keyboard. Includes a
              recording functionality, a random Kanye West quote generator, song
              lyric finder, and a text-to-speech functionality.
            </span>
          </Link>
        </div>
        <div className="container" id="linkSix">
          <img
            src={god}
            style={{ width: 200, height: 200 }}
            className="linkpic"
            alt=""
          />
          <Link to="/python" className="btn2" id="btn2">
            Monty Python Quiz
            <span id="pythonPop">
              A five question, multiple choice quiz inspired by Monty Python:
              the Quest for the Holy Grail. The question order and answer order
              will be randomized each try, there is a countdown timer that loses
              15 seconds when the wrong answer is selected. Once the time runs
              out there is a dynamically displayed failure messege. Upon
              successful completion the user is prompted to enter their initials
              which are stored to local storage and displayed in a high-scores
              chart. The entire app is accomponied by music and sound effects
              from the movie.
            </span>
          </Link>
        </div>

        <div className="container" id="linkFive">
          <img
            src={weather}
            alt="weather app"
            style={{ width: 200, height: 200 }}
            className="linkpic"
          />
          <Link to="/weather" className="btn3" id="btn3">
            Weather App
            <span id="weatherPop">
              An application for finding the weather in cities around the world.
              The user is prompted to enter the city they want to see the
              weather for, and upon submitting the current, as well as a five
              day forecast is displayed. Past searches are stored in local
              storage, up to 5, and buttons are dynamically added to the display
              that reflect past searches.
            </span>
          </Link>
        </div>
        <div className="container" id="linkSeven">
          <img
            src={bassoon}
            alt="bassoon"
            style={{ width: 200, height: 200 }}
            className="linkpic"
          />
          <Link to="/bassoon" className="btn4" id="btn4">
            Bassoon Stuff
            <span id="bsnPop">
              Not strictly development, this section contains links to my
              musician life: my YouTube page, my musician website, etc.
            </span>
          </Link>
        </div>

        <div className="container" id="linkThree">
          <img
            src={burger}
            alt="burger"
            style={{ width: 200, height: 200 }}
            className="linkpic"
          />
          <Link to="/burger" className="btn5" id="btn5">
            DumBurger
            <span id="burgerPop">
              This is a full-stack app hosted on Heroku. The user can create
              burgers, and those burgers are pushed to a database and displayed.
              They can also be devoured, moving them to a different section and
              updating the database accordingly.
            </span>
          </Link>
        </div>

        <div className="container" id="linkOne">
          <img
            src={flintz}
            alt="flint"
            style={{ width: 200, height: 200 }}
            className="linkpic"
            id="flintpic"
          />
          <Link to="/flintz" className="btn6" id="btn6">
            Flint'z Skinz
            <span id="flintPop">
              This is a full-stack app following the ORM structure, hosted on
              Heroku. The user can draw doodles on a canvas, doodles that can be
              recreated with the illusion of stop-motion animation. The doodles
              can be saved (and loaded from) a database.
            </span>
          </Link>
        </div>

        <div className="container" id="linkFour">
          <img
            src={rest}
            alt="rest screenshot"
            style={{ width: 200, height: 200 }}
            className="linkpic"
          />
          <Link to="/rest" className="btn7" id="btn7">
            Hot Restaurant
            <span id="restPop">
              A full stack application that simulates a reservation system for a
              restaurant with only five tables. Includes 2 RESTful API's and
              code that determinates between the two.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
