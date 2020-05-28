import React, {useState} from "react";
 import "../learn/learn.css"
import { Link } from "react-router-dom";





function Learn() {

    const [state, setState] = useState({
        q1:false,
        major: false,
        q2:false,
        isCorF:false,
        q3:false,
        hasFlat:false
    })

function minor() {
    setState({...state, major:false, q1:true})
}

function major() {
    setState({...state, major: true, q1:true})
}

function cOrF() {
    setState({...state, isCorF: true, q2:true})
}

function q2f() {
    setState({...state,  q2:true})
}



function flat() {
    setState({...state, hasFlat: true, q3:true})
}

function sharp() {
    setState({...state, hasFlat: false, q3:true})
}

function reset() {
    setState({q1:false,
        major: false,
        q2:false,
        isCorF:false,
        q3:false,
        hasFlat:false})
}

function log() {
    console.log(state)
}





    return (
       
        
        
        state.q1===false ? 
        <>
        <h3 className ="headTest">This step by step guide will help you find the key signature to any scale by following a simple, step-by-step series of questions, with minimal need for memorization!</h3>
        <div className="q1Div">
        <h2 className ="headQuest">Question 1</h2>
        <p className ="text">Is it a Major key or Minor key?</p>
        <button className= "ans1But" onClick={major}>Major</button>
        <button className= "ans1But" onClick={minor}>Minor</button>
        </div>
        </>

        : 
        state.q1===true && state.major===true && state.q2===false?
        <>
        <div className="q2Div">
        <h3 className ="headTest">Now that we have a major scale, it's time to ask ourselves the 2nd question: is it C major or F major?</h3>
        <button className= "ans1But" onClick={cOrF}>Yes</button>
        <button className= "ans1But" onClick={q2f}>No</button>
        </div>
        </>
        :
        state.q1===true && state.q2===true && state.isCorF===true?
        <>
<div className="cfDiv">
        <p className ="text">C and F major are the only two scales that we need to memorize the key signature for. C major has NO key signature (no sharps and no flats), and F major only has Bb in its key signature.</p>
        <h4 className ="headTest">Once you are done memorizing, click the button!</h4>
        <button className= "ans1But" onClick={reset}><Link to="/">DONE!</Link></button>
</div>
        </>
        :
        state.q1===true && state.q2===true && state.isCorF===false && state.q3===false?
        <>
        <p className ="head">Now we are ready to ask the final question: does the name of the scale have the word "flat" (or the symbol "b") in it? Examples that have it are Bb, Ab, Db. Examples that don't are F#, G#, A, B.</p>
        <button className= "ansBut" onClick={flat}>Yes it does!</button>
        <button className= "ansBut" onClick={sharp}>No it doesn't!</button>
        </>
        :
        state.q1===true && state.q2===true && state.q3===true && state.hasFlat===true?
        <>
        <p className ="text">If the scale has the word "flat" in it's name, (and it isn't C or F major), then we know it will have flats in it's key signature. Now we must determine which flats it has. To do so, we must first make sure we know the order of flats. Flats appear in a specific order, which is: B,E,A,D,G,C,F. It is suggested you memorize the order of sharps and flats. Here is a mnemonic device to help: Boromir Eats Arrows, Dies. Gollum Captures Frodo.</p>
        <p className ="text">Once we know the order of flats, we simply go down the order until we find the scale name we are looking for (note for this that the order is referring to flats. This means that B = B flat, E = E flat, etc.). Once we arrived at the target note, we simply add one more flat (by order), and those flats are the key signature for that scale.</p>
        <h3 className ="head">Example:</h3>
        <p className ="text">We are looking at the scale of Db major. Going down the order of flats until we match, we get B,E,A,D. Then, adding one more by order leads us to B,E,A,D,G, and those are the flats that are in the key signature of Db major (and it's relative minor, Bb minor).</p>
        <button className= "ansBut" onClick={reset}><Link to="/">Got It!</Link></button>
        </>
        :
        state.q1===true && state.q2===true && state.q3===true && state.hasFlat===false?
        <>
        <p className ="text">If the scale does not have the word "flat" in it's name, (and it isn't C or F major), then we know it will have sharps in it's key signature. Now we must determine which sharps it has. To do so, we must first make sure we know the order of sharps. sharps appear in a specific order, which is: F, C, G, D, A, E, B. It is suggested you memorize the order of sharps and flats. Here is a mnemonic device to help: Frodo Can Go Down And Eat Breakfast.</p>
        <p className ="text">Once we know the order of sharps, we need to go a "minor second" interval below our scale name (a minor second is half a step, and one note name change). This will give us another note (so a minor second below G is F#, a minor second below C is B, etc.). Once we found this new name, we go down the order of sharps until we hit a match with this new name, and those are the sharps in the key signature for that scale.</p>
        <h3 className ="head">Example:</h3>
        <p className ="text">We are looking at the scale of A major. Going down a minor second brings us to G#. We then go down the order of sharps until we hit a match, we get F, C, G, and those are the sharps that are in the key signature of A major (and it's relative minor, F# minor).</p>
        <button className= "ansBut" onClick={reset}><Link to="/">Got It!</Link></button>
        </>
        :
        state.q1===true && state.major===false?
        <>
        <p className ="text">When searching for the key signature of a minor scale, first we must find the "relative major" of it. A minor scale shares the same key signature of its relative major. </p>
        <p className ="text">To find the relative major, we must move up a "minor third" interval from the original scale name. A minor third interval is defined as a change of 1.5 steps, and TWO note names. This means that first we must determine what will be the note name of the target scale. The note name order is: C, D, E, F, G, A, B, C. So, first we must find our original, minor scale note name (disregarding for the moment any "b" or "#" signs attached to it), and move up 2 names from it.</p>
        <p className ="text">Next, we need to determine if the new note name (the one that is 2 above the original) has any "b" or "#" signs. To do that, we look at the 2nd part of finding a relative major: the 1.5 steps. Once we know the relative major's name, we need to account for the distance: we go back to the original, minor scale name (this time including any "b" or "#"), and we go up 1.5 steps from it. (C + 1.5 = D#, C# + 1.5 = E, Bb + 1.5 = C#, etc.) Once we have determined which sounding note is exactly 1.5 steps above our starting note, we then need to reconcile this note with the name we found in the previous step. This means that we must use "b" and "#" signs to make the note name we arrived in at step 1 SOUND like the note we arrived in at step two. Remember, 2 notes can sound the same but have different names (for example F# sounds like Gb). Also remember that there is a half step between B to C, and between E to F. </p>
        <p className ="text">Here is a complete example of this process: original scale is G minor. Going up 2 note names brings us to B. We go up a step and a half from G to get A#/Bb. Looking at those two options, since we know the note name needs to be B, we choose Bb as the final note, meaning that the relative major to G minor is Bb major.</p>
        <h3 className ="head">Found your relative major? AWESOME! Click the button when you are ready.</h3>
        <button className= "ansBut" onClick={major}>FOUND IT!</button>      
        </>
         :
         
         
         <button className= "ansBut" onClick={log}>current state</button>
    )
}

export default Learn;