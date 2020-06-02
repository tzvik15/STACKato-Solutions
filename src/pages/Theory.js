import React from "react";
import {Link} from "react-router-dom"
import "./theory.css";

const Theory=()=> {




    return(
        <>
        <div className="theoryLandDiv">
        <h1 className="hAndW">Music Theory Games!</h1>
        <p className="text">Hello and welcome to Music Theory Games. Please select the topic you would like to explore.</p>
        <Link to="/Theory/keys"><button className="btn">Key Signatures</button></Link>
        <Link to="/Theory/chords"><button className="btn">Chords</button></Link>
        </div>
        </>
    )
}

export default Theory