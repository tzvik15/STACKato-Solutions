import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
 import "../flats/flats.css"

function Flats() {
  const scales = [
    "C Major",
    "F Major",
    "Bb Major",
    "Eb Major",
    "Ab Major",
    "Db Major",
    "Gb Major",
    "Cb Major",
    "A Minor",
    "D Minor",
    "G Minor",
    "C Minor",
    "F Minor",
    "Bb Minor",
    "Eb Minor",
    "Ab Minor"
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
      case "F Major":
        setCorrect(1);
        break;
      case "Bb Major":
        setCorrect(2);
        break;
      case "Eb Major":
        setCorrect(3);
        break;
      case "Ab Major":
        setCorrect(4);
        break;
      case "Db Major":
        setCorrect(5);
        break;
      case "Gb Major":
        setCorrect(6);
        break;
      case "Cb Major":
        setCorrect(7);
        break;
      case "A Minor":
        setCorrect(0);
        break;
      case "D Minor":
        setCorrect(1);
        break;
      case "G Minor":
        setCorrect(2);
        break;
      case "C Minor":
        setCorrect(3);
        break;
      case "F Minor":
        setCorrect(4);
        break;
      case "Bb Minor":
        setCorrect(5);
        break;
      case "Eb Minor":
        setCorrect(6);
        break;
      case "Ab Minor":
        setCorrect(7);
        break;
      default:
        break;
    }
  };

  return play.start === false ? (
    <>
      <p className ="head">
        In this section you will be presented with a name of a scale, and you
        have to pick how many flats it has.
      </p>
      <button className= "ansBut" onClick={start}>READY!</button>
    </>
  ) : (
    <>
      <p className ="text" >How many flats does the following scale have?</p>
      <h3 className ="head">{rand}</h3>
      <button className= "ansBut2" onClick={selected}>0</button>
      <button  className= "ansBut2" onClick={selected}>1</button>
      <button className= "ansBut2" onClick={selected}>2</button>
      <button className= "ansBut2" onClick={selected}>3</button>
      <button className= "ansBut2" onClick={selected}>4</button>
      <button  className= "ansBut2" onClick={selected}>5</button>
      <button className= "ansBut2" onClick={selected}>6</button>
      <button className= "ansBut2" onClick={selected}>7</button>

      <div>
        <h1 className ="text" >Correct Answers: {count.yes}</h1>
        <h1 className ="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className= "home">
        <Link  to="/">HOME</Link>
      </button>
    </>
  );
}

export default Flats;
