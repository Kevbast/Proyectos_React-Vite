//onChange= eventHandler use primary from elements// ex. <input> <textarea> <radio> <select>//triggers a function everytime the value of the input changes

 import React,{useState} from "react"

function MyComponent2() {
    
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [coment,setComent] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping, setShipping]= useState();



    function handleNameCange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleComentCHange(event){
        setComent(event.target.value)
    }
    
    function handlePaymentChange(event){
        setPayment(event.target.value)
        
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(<div>
        <input value={name} type="text" onChange={handleNameCange} />
        <p>Name: {name} </p>

        <input value={quantity} type="number" onChange={handleQuantityChange} />
        <p>Quantity: {quantity} </p>

        <textarea name="textarea" placeholder="Enter delivery instructions" onChange={handleComentCHange} ></textarea>
        <p>Coment: {coment} </p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value ="">Select an option</option>
            <option value ="Visa">Visa</option>
            <option value ="Mastercard">Mastercard</option>
            <option value ="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment} </p>

        <label >
            <input type="radio" value="Pick Up" checked={shipping ==="Pick Up"} onChange={handleShippingChange}/>
            Pick up
        </label>
        <label >
            <input type="radio" value="Delivery" checked={shipping ==="Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        
        <p>Shipping: {shipping} </p>

    </div>);

}

export default MyComponent2