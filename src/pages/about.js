import React from "react";
import good from "../assets/pics/good.jpg";
import resume from "../assets/docs/Coding Resume.pdf";
import { Link } from "react-router-dom";

function About() {
  function modeFun1() {
    const modal2 = document.getElementById("tModal");

    // Get the button that opens the modal
    const btn = document.getElementById("techModal");

    // Get the <span> element that closes the modal
    const span2 = document.getElementsByClassName("close-btn")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal2.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
      modal2.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal2) {
        modal2.style.display = "none";
      }
    };
  }

  return (
    <>
      <section className="contactbox" id="box">
        <h2>
          About Me <hr />
        </h2>
        <img src={good} alt="picMe" id="mepic" />
        <p className="break" id="pOne">
          Hello everyone, and thank you for visiting my developer site! In this
          section I will tell you a little about myself, my history, and the
          work I've done and hoping to do.
        </p>
        <p className="break" id="pTwo">
          Let's start with the basics of my background. My formal studies
          started in the fields of music and education (I have a doctorate in
          performance and pedagogy!) I grew up in Israel, and later moved to Los
          Angeles, Colorado, and finally to North Carolina where I now live.
        </p>
        <p className="break" id="pThree">
          It was in Colorado that I learned how important collaboration is to
          me. In fact, the concept is so meaningful for me that I wrote my
          doctoral thesis on the subject!
        </p>
        <br />
        <p className="break" id="pFour">
          I took my first steps as a developer at the University of Denver,
          where I immedietly began incorporating my thoughts and ideas on
          collaborative work into my studies, collaborating on projects, and
          working with my cohort members to help and support each other in our
          journey as developers.
        </p>
        <p className="break" id="pFive">
        In North Carolina I combined my passion for collaboration with my
          skills as a deveoper in my position as a ServiceNow Business
          Analyst/Developer, working to provide value to the University of North
          Carolina at Chapel Hill. It is in NC that I also completed my career
          transition by attaining a Bachelor's degree in Computer Science.
          
        </p>
        <p className="break" id="pSix">
        As a developer, I am passionate about finding creative solutions to
          coding challenges. An example of this can be seen in my "Bone'z Beatz"
          project, where I used JavaScript to connect dynamically between sound
          files and key strokes, creating a fully custumizable soundboard
          application. (more about this project{" "}
          <Link to="/bonez" className="hereLink">
            HERE
          </Link>
          )
        </p>
        <p className="break" id="pSeven">
          You can see examples of my projects in the{" "}
          <Link to="/portfolio" className="hereLink">PORTFOLIO</Link> section.{" "}
          <a
            href="https://github.com/tzvik15"
            target="_blank"
            rel="noopener noreferrer"
            className="hereLink"
          >
            THIS
          </a>{" "}
          is a link to my GitHub page,{" "}
          <a
            href="https://www.linkedin.com/in/daniel-nester-aa074a189/"
            target="_blank"
            rel="noopener noreferrer"
            className="hereLink"
          >
            THIS
          </a>{" "}
          is a link to my LinkedIn page, and{" "}
          <a
            href={resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hereLink"
          >
            HERE
          </a>{" "}
          you can download my resume. For my technical skills and proficiencies,
          click {/* eslint-disable-next-line */}
          <a id="techModal" onClick={modeFun1} className="hereLink">
            HERE.
          </a>
        </p>
        <div id="tModal" className="modal">
          <div className="modal-content">
            <span className="close-btn">&times;</span>
            <p>
              <h3>Programing Languages:</h3> Java (Swing, AWT), Python
              (Pandas, Numpy, Matplotlib, Flask), JavaScript (ES6, bootstrap,
              React, Node.js, Express, Handlebars, Sequelize, jQuery,
              socket.io), HTML 5, CSS <br />
              <h3>Databases:</h3>ServiceNow, Oracle, mySQL, mongoDB{" "}
              <br />
              <h3>Design Models: </h3>UML Class Diagrams, ERD Diagrams, Software Engineering Documents (SDP, SRS, SDD, STS)  <br />
              <h3>Currently workin on:</h3> Finihing up my studies (expected gradtuation December 2022) <br />
            </p>
            <p>
              To see these skills in use, please click{" "}
              <Link to="/portfolio" className="hereLink">
                HERE
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
