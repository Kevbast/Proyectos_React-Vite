//RENDER LISTS


function List() {
    
    const fruits =[{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "pineapple", calories: 105},
                    {id: 4, name: "banana", calories: 159},
                    {id: 5, name: "coconut", calories: 37}];
    fruits.sort((a,b) => a.name.localeCompare(b.name));//alphabethic
    // fruits.sort((a,b) => b.name.localeCompare(a.name));// reverseAlphabethic
    fruits.sort((a,b)=> a.calories -b.calories );//ordenado x calorías de pequeño a rande y viceversa

    //lowCalFruits= fruits.filter(fruit => fruits.calories <100 ) //se sustituye lowCalFruits abajo por fruits

    //(hay que declarar una key(id)) Uncaught Error: Objects are not valid as a React child (found: object with keys {name, calories}). If you meant to render a collection of children, use an array instead.
    const listItems = fruits.map(fruit => <li key={fruit.id} >
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b>                         </li>);//devuelve la lista los objetos con el dato escogido

    return(<ul>{listItems}</ul>);
}

export default List