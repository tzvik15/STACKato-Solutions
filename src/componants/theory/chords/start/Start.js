import React from "react";
import { Link } from "react-router-dom";
 import "../start/start.css"

function Start() {

   

    return (
        <>
        <div className ="start2">
        <h2 className = "hAndW2">Hello and Welcome!</h2>
        <p className ="p2">This application will help you learn and practice chords in music theory! To begin, please choose if you would like to learn about chords, or test your knowledge.</p>
        <Link to="/theory/chords/learn"><button   className="btn-hover colorLearn"  >Learn</button></Link>
      
        <Link to="/theory/chords/play"><button   className="btn-hover colorPlay" >Play</button></Link>

        </div>
      


        </>
    )

}

export default Start;