//UseEffect(function,[dependencies])

 import React,{useState,useEffect} from "react"

function MyComponent7() {

    const [width,setWith]= useState(window.innerWidth);
    const [height,setHeight]= useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event listener added")

        return () => {
            window.removeEventListener("resize",handleResize); //clear
            console.log("Event listener removed")
        }
    },[]);//inside a UseEffect so that the console log doesn't run many times
    
    useEffect(()=>{
        document.title= `Size: ${width} x ${height}`;
    },[width,height]); //you can have more than one useEffect

    function handleResize() {
        setWith(window.innerWidth);
        setHeight(window.innerHeight);
    }
  return(
    <div>
      <p>Window width: {width}px </p>
      <p>Window width: {height}px </p>
    </div>
  )
}

export default MyComponent7