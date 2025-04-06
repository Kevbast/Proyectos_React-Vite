//UseEffect() this component re-renders ,mounts.

//UseEffect(function,[dependencies])

//1.UseEffect(()=>{}) // Runs after every re-render
//2.UseEffect(()=>{},[]) // Runs only on mount
//3.UseEffect(()=>{},[value]) // Runs only on mount + value changes

//USES
//#1 EVENT LISTENERS
//#2 DOM manipulation
//#3 Subscriptions  (real-time updates)
//#4 Fetching Data from API
//#5 Clean up when a component unmounts 

 import React,{useState,useEffect} from "react"

function MyComponent6() {

    const [count,setCount]= useState(0);
    const [color,setColor]=useState("green");

useEffect(()=> {
    document.title = `My counter program: ${count} ${color}`;
},[count,color]);

function addCount(){
    setCount(c=>c + 1);
}

function subtractCount (){
    setCount(c=>c - 1);
}
function changeColor(){
    setColor(c=>c ==="green" ? "red": "green");
}


  return(
    <div>
      <p style={{color:color}} >Count: {count} </p>
      <button onClick={addCount} >Add</button>
      <button onClick={subtractCount} >Subtract</button>
      <button onClick={changeColor} >Change color</button>
    </div>
  )
}

export default MyComponent6