import React, {useState} from 'react';
import './Room.css';

function Room() {

// const state = useState (true);
// const isLit = state [0]; 
// const setLit = state [1];
// console.log("State",state);


//function updateLit() {
//console.log("Button clicked");
//setLit(!isLit);

//}

// function increaseAge() {
//     console.log(" increaseAge Button clicked");
//     setAge(++age);
//}


let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(21);


    return (
        <div className={`room ${isLit? "lit": "dark"}`}> 
            This Room is {isLit? "lit": "dark"}
            <br/>
            Age: {age}
            <br/>
            <button onClick={()=> setLit(!isLit) } >Toggle Light</button>
            <br/>
            <button onClick={ ()=> {
                            console.log("Increase age arrow function");
                            setAge(++age);
                            }}>
                Increase Age
            </button>
        </div>
        );

  
  }
export default Room;
