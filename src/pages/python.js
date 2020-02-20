import React from "react";
import python from "../assets/pics/python.jpg";

function Python() {
  return (
    <div className="body">
      <div className="contactbox" id="pythonBox">
        <img
          src={python}
          alt="screenshot of Monty Python quiz"
          id="pythonPic"
        />
        <h2>Monty Python Quiz</h2>
        <p className="break">
          A five question quiz based on Monty Python and the Quest for the Holy
          Grail.
        </p>
        <p className="break">
          When the user clicks the "start the clock" button, the timer beginns
          to count down in 1 second intervals, and the first question is
          dynamically displayed, along with answer options. Both question order
          and the order the answers are presented are randomized. Additionally,
          the background music starts playing.
        </p>
        <p className="break">
          If the user selects the correct answer, the next question is
          dynamically displayed. If the user selects the wrong answer, a sound
          effect occurs, and 15 seconds are subtracted from the timer. If the
          user successfully answers the five questions, they are prompted to
          enter their initials, which are stored to local storage and displayed
          in the "high scores" page. If the time runs out before completion, a
          fail messege is dynamically displayed, with a button to restart the
          quiz. The high scores page pulls the initials and the time from local
          storage and displays it in a table. It also includes a button to erase
          local storage (and thus the table).
        </p>
        <h4>Technologies, Libraries, and API's used</h4>
        <p className="break">This application uses the Google Fonts library.</p>
        <h4 className="break">
          GitHub repository:{" "}
          <a
            href="https://github.com/tzvik15/Monty-Python-Quiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4 className="break">
          Deployed site:{" "}
          <a
            href="https://tzvik15.github.io/Monty-Python-Quiz/"
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

export default Python;
