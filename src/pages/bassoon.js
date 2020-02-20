import React from "react";
import bassoon from "../assets/pics/bassoon2.jpg";

function Bassoon() {
  return (
    <div className="body">
      <div className="contactbox" id="bsnBox">
        <img src={bassoon} alt="screenshot of my bassoon page" id="bsnPic" />
        <h2>Bassoon</h2>
        <p className="break">A word about my past.</p>
        <p className="break">
          Before I became a web developer, I was a professional bassoonist. I
          still keep my bassoon page (relatively) up to date with news about my
          upcoming performances.
        </p>
        <p className="break">
          I also have a YouTube channel where I upload new recordings that I
          make.
        </p>
        <h4 className="break">
          Bassoon website:{" "}
          <a
            href="https://bassoonester.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
        </h4>
        <h4 className="break">
          YouTube page:{" "}
          <a
            href="https://www.youtube.com/channel/UCo4HhuHWViPtd4VE09DmMkw?view_as=subscriber"
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

export default Bassoon;
