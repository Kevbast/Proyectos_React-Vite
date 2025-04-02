//Update arrays in state

 import React,{useState} from "react"

function MyComponent4() {
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);
     
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""; //used to pick the value of the input ID and set the value to " "

        setFoods(f =>[...f ,newFood]);
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_,i) => i !==index  ));//"→ It's the element of the array, but it's ignored because we don't use it. //i → This is the index of the current element.

        
    }//foods.filter((_, i) => i !== index) keeps all items except the one that matches index.

  return(
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food,index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default MyComponent4