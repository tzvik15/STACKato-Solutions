import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


 import "./quiz.css";

function Quiz() {
  const [play, setPlay] = useState({
    start: false
  });

  const [timer, setTimer] = useState({
    num: 30
  });

  const [count, setCount] = useState({
    yes: 0,
    no: 0
  });

  const [rand, setRand] = useState("");

  const [correct, setCorrect] = useState("");

  const scales = [
    "C Major",
    "A Minor",
    "F Major",
    "D Minor",
    "Bb Major",
    "G Minor",
    "Eb Major",
    "C Minor",
    "Ab Major",
    "F Minor",
    "Db Major",
    "Bb Minor",
    "Gb Major",
    "Eb Minor",
    "Cb Major",
    "Ab Minor",
    "G Major",
    "E Minor",
    "D Major",
    "B Minor",
    "A Major",
    "F# Minor",
    "E Major",
    "C# Minor",
    "B Major",
    "G# Minor",
    "F# Major",
    "D# Minor",
    "C# Major",
    "A# Minor"
  ];

  const time = () => {
    setTimer({ num: timer.num - 1 });
  };

  useEffect(() => {
    setTimeout(() => {
      time();
    }, 1000);
  }, [timer.num]);

  useEffect(() => {
    answer();
  }, [rand]);

  const start = () => {
    setPlay({ start: true });
    time();
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
    // console.log(event.target.attributes[0].value)
    if (event.target.attributes[0].value === correct) {
      coAn();
      random();
    } else inCoAn();
    random();
  };

  const answer = () => {
    switch (rand) {
      case "C Major":
        setCorrect("btn0");
        break;
      case "F Major":
        setCorrect("btn1f");
        break;
      case "Bb Major":
        setCorrect("btn2f");
        break;
      case "Eb Major":
        setCorrect("btn3f");
        break;
      case "Ab Major":
        setCorrect("btn4f");
        break;
      case "Db Major":
        setCorrect("btn5f");
        break;
      case "Gb Major":
        setCorrect("btn6f");
        break;
      case "Cb Major":
        setCorrect("btn7f");
        break;
      case "A Minor":
        setCorrect("btn0");
        break;
      case "D Minor":
        setCorrect("btn1f");
        break;
      case "G Minor":
        setCorrect("btn2f");
        break;
      case "C Minor":
        setCorrect("btn3f");
        break;
      case "F Minor":
        setCorrect("btn4f");
        break;
      case "Bb Minor":
        setCorrect("btn5f");
        break;
      case "Eb Minor":
        setCorrect("btn6f");
        break;
      case "Ab Minor":
        setCorrect("btn7f");
        break;
      case "G Major":
        setCorrect("btn1s");
        break;
      case "D Major":
        setCorrect("btn2s");
        break;
      case "A Major":
        setCorrect("btn3s");
        break;
      case "E Major":
        setCorrect("btn4s");
        break;
      case "B Major":
        setCorrect("btn5s");
        break;
      case "F# Major":
        setCorrect("btn6s");
        break;
      case "C# Major":
        setCorrect("btn7s");
        break;
      case "E Minor":
        setCorrect("btn1s");
        break;
      case "B Minor":
        setCorrect("btn2s");
        break;
      case "F# Minor":
        setCorrect("btn3s");
        break;
      case "C# Minor":
        setCorrect("btn4s");
        break;
      case "G# Minor":
        setCorrect("btn5s");
        break;
      case "D# Minor":
        setCorrect("btn6s");
        break;
      case "A# Minor":
        setCorrect("btn7s");
        break;
      default:
        break;
    }
  };

  return play.start === false ? (
    <>
      <p className ="head">
        In this section you will be presented with a name of a scale, and you
        have to pick its key signature. You will have 30 seconds to correctly
        name as many scales as you can! When you are ready to start the clock,
        click the button!
      </p>
      <button className= "ready" onClick={start}>READY!</button>
    </>
  ) : play.start === true && timer.num > 0 ? (
    <>
      <div>
        <h2 className ="head">Time Left: {timer.num} seconds</h2>
      </div>
      <div>
        <p className="text">
          What is the key signature of the following scale?
        </p>
        <h3 className="head">{rand}</h3>
        <button id="btn0" onClick={selected}></button>
        <button id="btn1s" onClick={selected}></button>
        <button id="btn2s" onClick={selected}></button>
        <button id="btn3s" onClick={selected}></button>
        <button id="btn4s" onClick={selected}></button>
        <button id="btn5s" onClick={selected}></button>
        <button id="btn6s" onClick={selected}></button>
        <button id="btn7s" onClick={selected}></button>
        <button id="btn1f" onClick={selected}></button>
        <button id="btn2f" onClick={selected}></button>
        <button id="btn3f" onClick={selected}></button>
        <button id="btn4f" onClick={selected}></button>
        <button id="btn5f" onClick={selected}></button>
        <button id="btn6f" onClick={selected}></button>
        <button id="btn7f" onClick={selected}></button>
      </div>
      <button className="home">
        <Link to="/">HOME</Link>
      </button>
    </>
  ) : (
    <>
      <h2 className ="head" >TIME'S UP!</h2>
      <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className="home">
        <Link to="/">HOME</Link>
      </button>
    </>
  );
}

export default Quiz;
