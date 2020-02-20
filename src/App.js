import React from "react";

import "./App.css";
import Navbar from "./componants/navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bonez from "./pages/bonez";
import Bassoon from "./pages/bassoon";
import Burger from "./pages/burger";
import Flintz from "./pages/flintz";
import Python from "./pages/python";
import Rest from "./pages/rest";
import Weather from "./pages/weather";

function App() {
  return (
    <Router>
      
        <body className="body">
          <div className="content">
            <Navbar />
          </div>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path ="/React-Portfolio" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/bonez" component={Bonez} />
          <Route exact path="/bassoon" component={Bassoon} />
          <Route exact path="/burger" component={Burger} />
          <Route exact path="/flintz" component={Flintz} />
          <Route exact path="/python" component={Python} />
          <Route exact path="/rest" component={Rest} />
          <Route exact path="/weather" component={Weather} />
        </body>
      
    </Router>
  );
}

export default App;
