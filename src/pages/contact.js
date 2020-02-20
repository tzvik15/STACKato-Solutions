import React from "react";

function Contact() {
  return (
    <div className="contactbox" id="contact">
      <h2>
        Contact <hr />
      </h2>
      <p className="break">
        You can contact me directly by email{" "}
        <a href="mailto:stackatosolutions@gmail.com">HERE</a>, or by phone at
        303.667.4813
      </p>
      <p className="break">
        You can find my GitHub page{" "}
        <a href="https://github.com/tzvik15" target="_blank" rel="noopener noreferrer">
          HERE
        </a>
        , and my LinkedIn profile{" "}
        <a
          href="https://www.linkedin.com/in/daniel-nester-aa074a189/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HERE
        </a>
        .
      </p>
      <p className="break">
        Alternately, feel free to fill out the contact box, and I will contact
        you back.
      </p>

      <form
        className="break"
        id="forming"
        action="https://formspree.io/xvoplyvd"
        method="POST"
        target="_blank"
      >
        Name: <br />
        <input type="text" name="userName" size="111%" id="inputName" />
        <br />
        Email: <br />
        <input type="text" name="userMail" size="111%" id="inputMail" />
        <br />
        Messege:
        <br />
        <textarea
          name="messege"
          rows="15"
          cols="100%"
          id="inputText"
        ></textarea>{" "}
        <br />
        <input
          onClick="window.location.href = 'https://tzvik15.github.io/Responsive-Portfolio/index.html';"
          type="submit"
          value="Submit"
          className="button"
          id="submitBtn"
        />
      </form>
    </div>
  );
}
export default Contact;
