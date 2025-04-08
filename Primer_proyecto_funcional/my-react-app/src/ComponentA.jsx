// useContext()= React Hook  that alows to share values between multiple levels of components without passing through each level

//this is the provider component
import React,{useState,createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
    
    const [user,setUser] = useState("Kevbast");

    return(//to pass the component between them user={props.user} in component B etc
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`} </h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>  
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA;