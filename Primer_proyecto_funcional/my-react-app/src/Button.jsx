
//Click Events


function Button() {
    
    const handleClick = () => console.log ("OUCH");

   // const handleClick2 = (name) => console.log(`${name} stop clicking me! ` )
    //handleClick2("BRO")

    //const handleClick = (e) => e.target.textContent = "Ouch!";
    //onClick={(e)=> handleClick(e)}


    return(<button onClick={handleClick}>Click me 😎 </button>);
    //ondblclick
}

export default Button