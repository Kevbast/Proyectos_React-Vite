
 import React,{useState,useEffect, useRef} from "react"

function StopWatch() {
    
    const[isRunning,setIsRunning] = useState(false);
    const[elapsedTime,setElapsedTime] = useState(0);//miliseconds
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);//miliseconds

    useEffect(()=>{
        if (isRunning) {
            intervalIdRef.current= setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }

        return ()=>{
            clearInterval(intervalIdRef.current);
        }

    },[isRunning]);

    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() -elapsedTime; 
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime /(1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime /(1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime /(1000) %60 );
        let miliseconds = Math.floor((elapsedTime % 1000) / 10 );

        return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    }


  return(
    <div className="container-stopwatch">
        <div className="stopwatch">
         <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    </div>
  )
}

export default StopWatch