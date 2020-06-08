import React, {useState} from "react";
import {Link} from "react-router-dom";
 import "./theoryPlay.css";
import Build from "../build/Build"
import Recognize from "../recognize/Recognize"

const TheoryPlay=()=> {

    const [build, setBuild]=useState(false);
    const [rec, setRec]=useState(false);

    const builder=()=>{
        setBuild(true)
        setRec(false)
    }

    const recognizer=()=>{
        setBuild(false)
        setRec(true)
    }


    return (
        build===false && rec===false?
        <>
    <h4 className ="infoS">Would you like to practice building chords, or recognizing chords?</h4>
        <div id="theoryPlayChoice">
        <button className ="btn-hover colorBuild" onClick={builder}>Build</button>
        <button className ="btn-hover colorRecognize" onClick={recognizer}>Recognize</button>
        <Link to="/theory/chords"><button className ="btn-hover colorHome  " id="theoryPlayChoiceHome"> HOME!</button></Link>
        </div>
        </>
        : build===true?
        <>
        <Build />
        </>
        :
        <>
        <Recognize />
        </>
    )
}

export default TheoryPlay;