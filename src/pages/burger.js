import React from "react";
import burger from "../assets/pics/BurgerFull.jpg";

function Burger() {
  return (
    <div className="body">
      <div className="contactbox" id="burgerBox">
        <img src={burger} alt="screenshot of Burger app" id="burgerPic" />
        <h2>DumBurger</h2>
        <p className="break" id="p1">
          A full-stack app that allows for the creation and consumption of
          burgers.
        </p>
        <p className="break">
          The user can input the burger of their dreams. When they click the
          button, that burger is created and stored to a database, a sound
          plays, and the burger is added to the burgers on the left side of the
          screen.
        </p>
        <p className="break">
          Each Burger has a button attached to it. When clicked, a sound is
          played and the burger is moved to the right section, where all the ate
          burgers are, and the database is updated.
        </p>
        <h4>Technologies, Libraries, and API's used</h4>
        <p className="break">
          This application uses node.js with an Express server, jQuery, Express
          Handlebars, mySQL and JAWS database.
        </p>
        <h4 className="break">
          GitHub repository:{" "}
          <a
            href="https://github.com/tzvik15/Burger"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4 className="break">
          Deployed site:{" "}
          <a
            href="https://morning-beach-14851.herokuapp.com/"
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

export default Burger;
