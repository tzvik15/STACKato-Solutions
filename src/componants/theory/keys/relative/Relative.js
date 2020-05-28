import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../relative/relative.css"

function Relative() {

    const scales = ["C Major", "A Minor", "F Major", "D Minor", "Bb Major", "G Minor", "Eb Major", "C Minor", "Ab Major", "F Minor", "Db Major", "Bb Minor", "Gb Major", "Eb Minor", "Cb Major", "Ab Minor", "G Major", "E Minor", "D Major", "B Minor", "A Major", "F# Minor", "E Major", "C# Minor", "B Major", "G# Minor", "F# Major", "D# Minor", "C# Major", "A# Minor"]

    const [count, setCount] = useState({
        yes:0,
        no:0
    })
    
    const [rand, setRand] = useState("");

    const [correct, setCorrect] = useState("");

    const [play, setPlay] = useState({
        start:false
    })

    const coAn=()=> {
        setCount({...count, yes:count.yes+1})
    }

    const inCoAn=()=> {
        setCount({...count, no:count.no+1})
    }

    const start=()=> {
        setPlay({start:true})
        random();
    }

    useEffect(() => {
        
        answer();
      }, [rand]);

    const selected=(event)=> {
        if (event.target.innerText === correct) {
          coAn();  random();
        } else inCoAn(); random();
    }

    const random=()=>{
       let rand1 = scales[Math.floor(Math.random() * scales.length)];
       setRand(rand1); 
    }


    const answer=()=>{

        rand==="C Major" ?
            setCorrect("A Minor")
        :
        rand==="F Major" ?
            setCorrect("D Minor")
        :
        rand==="Bb Major" ?
            setCorrect("G Minor")
        :
        rand==="Eb Major" ?
            setCorrect("C Minor")
        :
        rand==="Ab Major" ?
            setCorrect("F Minor")
        :
        rand==="Db Major" ?
            setCorrect("Bb Minor")
        :
        rand==="Gb Major" ?
            setCorrect("Eb Minor")
        :
        rand==="Cb Major" ?
            setCorrect("Ab Minor")
        :
        rand==="G Major" ?
            setCorrect("E Minor")
        :
        rand==="D Major" ?
            setCorrect("B Minor")
        :
        rand==="A Major" ?
            setCorrect("F# Minor")
        :
        rand==="E Major" ?
            setCorrect("C# Minor")
        :
        rand==="B Major" ?
            setCorrect("G# Minor")
        :
        rand==="F# Major" ?
            setCorrect("D# Minor")
        :
        rand==="C# Major" ?
            setCorrect("A# Minor")
        :
        rand==="A Minor" ?
            setCorrect("C Major")
        :
        rand==="D Minor" ?
            setCorrect("F Major")
        :
        rand==="G Minor" ?
            setCorrect("Bb Major")
        :
        rand==="C Minor" ?
            setCorrect("Eb Major")
        :
        rand==="F Minor" ?
            setCorrect("Ab Major")
        :
        rand==="Bb Minor" ?
            setCorrect("Db Major")
        :
        rand==="Eb Minor" ?
            setCorrect("Gb Major")
        :
        rand==="Ab Minor" ?
            setCorrect("Cb Major")
        :
        rand==="E Minor" ?
            setCorrect("G Major")
        :
        rand==="B Minor" ?
            setCorrect("D Major")
        :
        rand==="F# Minor" ?
            setCorrect("A Major")
        :
        rand==="C# Minor" ?
            setCorrect("E Major")
        :
        rand==="G# Minor" ?
            setCorrect("B Major")
        :
        rand==="D# Minor" ?
            setCorrect("F# Major")
        :
        rand==="A# Minor" ?
            setCorrect("C# Major")
        
        :
        console.log("here")
    }


    return (

        play.start===false?
        <>
        <p className ="head">In this section you will be given a random scale name, and you will need to select the relative minor/major</p>
        <button className= "ansBut" onClick={start}>READY!</button>
        </>
        :
        <>
        <p className ="text">What is the relative scale of the following scale?</p>
        
        <h3 className ="head">{rand}</h3>
        {scales.sort().map((item) => (
            <button  className= "ansBut1" onClick={selected}>{item }</button>
        ))}

        <div>
            <h1 className ="text">Correct Answers: {count.yes}</h1>
            <h1 className ="text">Incorrect Answers: {count.no}</h1>
        </div>
        <button  className= "home" ><Link to="/">HOME</Link></button>
        </>
    )
}

export default Relative;