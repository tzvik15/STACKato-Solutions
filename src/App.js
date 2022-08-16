import React from "react";

import "./App.css";
import Navbar from "./componants/navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Bonez from "./pages/bonez";
import Bassoon from "./pages/bassoon";
import Burger from "./pages/burger";
import Flintz from "./pages/flintz";
import Python from "./pages/python";
import Rest from "./pages/rest";
import Weather from "./pages/weather";
import Theory from "./pages/Theory";
import Keys from "./pages/Keys";
import LearnKeys from "./componants/theory/keys/learn/Learn";
import PlayKeys from "./componants/theory/keys/play/Play";
import Chords from "./pages/Chords";
import LearnChords from "./componants/theory/chords/learn/Learn";
import PlayChords from "./componants/theory/chords/play/Play";

function App() {
  return (
    <HashRouter basename="/">
      <body className="body">
        <div className="content">
          <Navbar />
        </div>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/React-Portfolio-2" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/bonez" component={Bonez} />
        <Route exact path="/bassoon" component={Bassoon} />
        <Route exact path="/burger" component={Burger} />
        <Route exact path="/flintz" component={Flintz} />
        <Route exact path="/python" component={Python} />
        <Route exact path="/rest" component={Rest} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/Theory" component={Theory} />
        <Route exact path="/Theory/keys" component={Keys} />
        <Route exact path="/Theory/keys/learn" component={LearnKeys} />
        <Route exact path="/Theory/keys/play" component={PlayKeys} />
        <Route exact path="/Theory/chords" component={Chords} />
        <Route exact path="/Theory/chords/learn" component={LearnChords} />
        <Route exact path="/Theory/chords/play" component={PlayChords} />
      </body>
    </HashRouter>
  );
}

export default App;
