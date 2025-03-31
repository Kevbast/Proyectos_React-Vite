//React Hook //UseState()

import React,{useState} from "react"
function Counter() {

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }
    //setCount(c =>c + 1); //updater functions,catch the previus number,you can use twice times or more
    const decrement = ()=>{
        setCount(count - 1);
    }

    const reset = ()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="counte-display">{count} </p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );

}

export default Counter