//Conditionals+props(atributos al component)

function UserGreeting(props) {
    const welcomeBRO = <h2>Welcome {props.username}</h2>
    if(props.isLoggedIn) {
        return  welcomeBRO
      }else{
        return <h2>Please log in to continue</h2>
      }
      //Otra forma de hacerlo
      //return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> :
      //                            <h2>Please log in to continue</h2>)
      
      UserGreeting.defaultProps = {
        isLoggedIn :false,
        username: "Guest",
      }


    }

export default UserGreeting