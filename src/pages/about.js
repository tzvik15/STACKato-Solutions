import React from "react";
import good from "../assets/pics/good.jpg";
import logo from "../logo.svg";
import resume from "../assets/docs/Coding Resume.pdf"
import { Link } from "react-router-dom";

function About() {
    function modeFun1() {
        const modal2 = document.getElementById("tModal");
    
        // Get the button that opens the modal
        const btn = document.getElementById("techModal");
    
        // Get the <span> element that closes the modal
        const span2 = document.getElementsByClassName("close-btn")[0];
    
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal2.style.display = "block";
        };
    
        // When the user clicks on <span> (x), close the modal
        span2.onclick = function() {
          modal2.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
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
            Hello everyone, and thank you for visiting my developer site! In
            this section I will tell you a little about myself, my history,
            and the work I've done and hoping to do.
          </p>
          <p className="break" id="pTwo">
            Let's start with the basics of my background. My formal studies
            were in the fields of music and education (I have a doctorate in
            performance and pedagogy!) I grew up in Israel, where I did my
            undergrad, and later moved to Los Angeles and finally to Colorado
            for my graduate work.
          </p>
          <p className="break" id="pThree">
            It was here in Colorado that I learned how important collaboration
            is to me. In fact, the concept is so meaningful for me that I
            wrote my doctoral thesis on the subject!
          </p>
          <br />
          <p className="break" id="pFour">
            I took my first steps as a developer at the University of Denver,
            where I immedietly began encorporating my thoughts and ideas on
            collaborative work into my studies, collaborating on projects, and
            working with my cohort members to help and support each other in
            our journey as developers.
          </p>
          <p className="break" id="pFive">
            As a developer, I am passionate about using JavaScript to find
            creative solutions to coding challenges. An example of my JS can
            be seen in my "Bone'z Beatz" project, where I used JS to connect
            dynamically between sound files and key strokes, creating a fully
            custumizable soundboard application. (more about this project{" "}
            <Link to="/bonez">HERE</Link>)
          </p>
          <p className="break" id="pSix">
            As my client, I will work together with you, collaborating to
            realize the projects you envision, providing you with the best
            quality and support, and the knowledge that the final product will
            truely be a part and representation of YOU and YOUR needs.
          </p>
          <p className="break" id="pSeven">
            You can see examples of my projects in the{" "}
            <Link to="/portfolio">PORTFOLIO</Link> section.{" "}
            <a
              href="https://github.com/tzvik15"
              target="_blank"
              rel="noopener noreferrer"
            >
              THIS
            </a>{" "}
            is a link to my GitHub page,{" "}
            <a
              href="https://www.linkedin.com/in/daniel-nester-aa074a189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              THIS
            </a>{" "}
            is a link to my LinkedIn page, and{" "}
            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>{" "}
            you can download my resume. For my technical skills and
            proficiencies, click{" "}
            {/* eslint-disable-next-line */}
            <a id="techModal" onClick={modeFun1}>
              HERE.
            </a>
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <div id="tModal" className="modal">
            <div className="modal-content">
              <span className="close-btn">&times;</span>
              <p>
                <h3>Programing Languages Known:</h3> HTML 5, CSS, JavaScript
                (ES6) <br />
                <h3>Front End:</h3>React.js (including hooks), REST API
                queries, 3rd party JS and CSS library integration, deployment
                of web pages <br />
                <h3>Back End: </h3>Node.js, Express servers, REST API
                creation, NPM, Handlebars, Sequelize <br />
                <h3>Cross Stack: </h3>MERN stack, jQuery, Test Driven
                Development with Jest, mySQL, Object Oriented Programming,
                MongoDB and Mongoose, PWA creation (including offline support){" "}
                <br />
                <h3>In Development:</h3> Python <br />
              </p>
              <p>
                To see these skills in use, please click{" "}
                <Link to="/portfolio">HERE</Link>.
              </p>
               
            </div>
          </div>
        </section>
      </>


    )
}   

export default About;