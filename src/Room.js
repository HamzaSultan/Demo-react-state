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
    let [Temp , setTemp] = useState(21);


    return (
        <div className={`room ${isLit? "lit": "dark"}`}> 
            This Room is {isLit? "lit": "dark"}
            <br/>
            Temp: {Temp}
            <br/>
            <button className="btn" onClick={()=> setLit(!isLit) } >Toggle Light</button>
            <br/>
            <button className="btn" onClick={ ()=> {
                            console.log("Decrease temparature arrow function");
                            setTemp(--Temp);
                            }}>
                Decrease temparature
            </button>

            <br/>

            <button className="btn" onClick={ ()=> {
                            console.log("Increase temparature arrow function");
                            setTemp(++Temp);
                            }}>
                Increase temparature
            </button>
        </div>
        );

  
  }
export default Room;
