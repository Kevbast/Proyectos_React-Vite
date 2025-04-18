//Update objects in state

 import React,{useState} from "react"

function MyComponent3() {
    
    const [car,setCar] = useState({year:2022,
                                    make:"Ford",
                                    model:"Mustang"});
    
    function handleYearChange(event){
        setCar(c=>({...c, year: event.target.value})); //...car Collect all the saved JS data so you don't lose it,and to work with the previous car we are gone replace car with c 
    } 
    function handleMakeChange(event){
        setCar(c=>({...c, make: event.target.value}));
    } 
    function handleModelChange(event){
        setCar(c=>({...c, model: event.target.value}));
    }                               
  return(
    <div>
        <p>Your favorite car is {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange} /><br/>
    </div>
  )
}

export default MyComponent3