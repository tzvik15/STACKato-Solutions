import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
 import "../sharps/sharps.css"

function Sharps() {
  const scales = [
    "C Major",
    "G Major",
    "D Major",
    "A Major",
    "E Major",
    "B Major",
    "F# Major",
    "C# Major",
    "A Minor",
    "E Minor",
    "B Minor",
    "F# Minor",
    "C# Minor",
    "G# Minor",
    "D# Minor",
    "A# Minor"
  ];

  const [play, setPlay] = useState({
    start: false
  });

  const [rand, setRand] = useState("");

  const [correct, setCorrect] = useState(0);

  const [count, setCount] = useState({
    yes: 0,
    no: 0
  });

  useEffect(() => {
    answer();
  }, [rand]);

  const start = () => {
    setPlay({ start: true });
    random();
  };

  const random = () => {
    let rand1 = scales[Math.floor(Math.random() * scales.length)];
    setRand(rand1);
  };

  const coAn = () => {
    setCount({ ...count, yes: count.yes + 1 });
  };

  const inCoAn = () => {
    setCount({ ...count, no: count.no + 1 });
  };

  const selected = event => {
    if (parseInt(event.target.innerText) === correct) {
      coAn();
      random();
    } else inCoAn();
    random();
  };

  const answer = () => {
    switch (rand) {
      case "C Major":
        setCorrect(0);
        break;
      case "G Major":
        setCorrect(1);
        break;
      case "D Major":
        setCorrect(2);
        break;
      case "A Major":
        setCorrect(3);
        break;
      case "E Major":
        setCorrect(4);
        break;
      case "B Major":
        setCorrect(5);
        break;
      case "F# Major":
        setCorrect(6);
        break;
      case "C# Major":
        setCorrect(7);
        break;
      case "A Minor":
        setCorrect(0);
        break;
      case "E Minor":
        setCorrect(1);
        break;
      case "B Minor":
        setCorrect(2);
        break;
      case "F# Minor":
        setCorrect(3);
        break;
      case "C# Minor":
        setCorrect(4);
        break;
      case "G# Minor":
        setCorrect(5);
        break;
      case "D# Minor":
        setCorrect(6);
        break;
      case "A# Minor":
        setCorrect(7);
        break;
      default:
        break;
    }
  };

  return play.start === false ? (
    <>
      <p className ="headTest">
        In this section you will be presented with a name of a scale, and you
        have to pick how many sharps it has.
      </p>
      <button className= "ans1But" id="sharpRdy" onClick={start}>READY!</button>
    </>
  ) : (
    <>
  <div className="questDiv">
      <p className ="text">How many sharps does the following scale have?</p>
      <h3 className ="headTest">{rand}</h3>
      </div>
      <div className="numBtnDiv">
      <button className= "ansBut2" onClick={selected}>0</button>
      <button className= "ansBut2" onClick={selected}>1</button>
      <button className= "ansBut2" onClick={selected}>2</button>
      <button className= "ansBut2" onClick={selected}>3</button>
      <button className= "ansBut2" onClick={selected}>4</button>
      <button className= "ansBut2" onClick={selected}>5</button>
      <button className= "ansBut2" onClick={selected}>6</button>
      <button className= "ansBut2" onClick={selected}>7</button>
</div>
      <div className="tallyDiv">
        <h1 className ="text">Correct Answers: {count.yes}</h1>
        <h1 className ="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className= "home">
        <Link to="/Theory/keys">HOME</Link>
      </button>
    </>
  );
}

export default Sharps;
