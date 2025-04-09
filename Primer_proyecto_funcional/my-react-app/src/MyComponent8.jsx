//UseRef similar useState()
//When you want a component to "remember" some information,but you don´t want that informastion to trigger new renders.
//1-accessing/interacting DOM elements 2.Handling Focus,Animations and Transitions 3.Managing Timers and Intervals

 import React,{useState,useEffect, useRef} from "react"

function MyComponent8() {
    
    ///const ref = useRef(0);// turns in object
    const inputRef1 = useRef(null);// turns in object
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    //state variable
    //let [number,setNumber]= useState(0);

    useEffect(()=>{
        console.log("COMPONENT RENDERED");
        console.log(inputRef1);
    });

    /* function handleClick(){
        setNumber(n => n + 1);
    } */
   function handleClick1(){
    ///ref.current++;
    ///console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="cyan"
    //inputRef2.current.style.backgroundColor="" if you want stablish without color the other inputs
   }

   function handleClick2(){
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor="black"
   }

   function handleClick3(){
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor="orange"
   }

  return(
    <div>
      <button onClick={handleClick1} >Click me!</button>
        <input type="text" placeholder="xd"  ref={inputRef1} /> <br />
        <button onClick={handleClick2} >Click me!</button>
        <input type="text" placeholder="xd"  ref={inputRef2} /> <br />
        <button onClick={handleClick3} >Click me!</button>
        <input type="text" placeholder="xd"  ref={inputRef3} /> <br />
        
    </div>
  )
}

export default MyComponent8