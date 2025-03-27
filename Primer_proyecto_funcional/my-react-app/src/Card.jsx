import profilePicture from './assets/spiderman.png'


function Card() {
    
    return(
        <>
            <div className="card">
               <img  className='CardImage' src={profilePicture} alt="profile picture" />
                <h2 className='CardTittle' >Kevbast77</h2>
                <p className='CardText' >I make youtube videos and play videogames</p>
            </div>
        </>
        );
}

export default Card