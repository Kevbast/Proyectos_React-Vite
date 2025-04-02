import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import List2 from './List2.jsx'
import Button from './Button.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MyComponent2 from './MyComponent2.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComponent3 from './MyComponent3.jsx'
import MyComponent4 from './MyComponent4.jsx'
import MyComponent5 from './MyComponent5.jsx'

function App() {
  const [count, setCount] = useState(0);
  const fruits =[{id: 1, name: "apple", calories: 95},
                {id: 2, name: "orange", calories: 45},
                {id: 3, name: "pineapple", calories: 105},
                {id: 4, name: "banana", calories: 159},
                {id: 5, name: "coconut", calories: 37}];
  const vegetables =[{id: 6, name: "potatoes", calories: 110},
                  {id: 7, name: "celery", calories: 15},
                  {id: 8, name: "carrots", calories: 25},
                  {id: 9, name: "corn", calories: 63},
                  {id: 10, name: "brocoli", calories: 50}];              

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Header/>
      <Footer/>
      <Card/>
      <Card/>
      <Card/>
      <UserGreeting isLoggedIn={true} username="Bro Code"/>
      <UserGreeting />

       <List/>
       <h2>OTRA LISTA DIFERENTE---</h2> 
       {/* ahora una lista más eficiento con props */}
       {fruits.length > 0 ? <List2 items= {fruits} category="Fruits"/> : null}  
       <List2 items= {vegetables} category="Vegetables"/>
      
      <Button/>

      <hr/>

      <MyComponent/>
      <hr/>
      <Counter/>
      <hr/>

      <MyComponent2/>

      <hr/>
      <ColorPicker/>

      <hr/>

      <MyComponent3/>

      <hr/>

      <MyComponent4/>

      <hr/>

      <MyComponent5/>
      
    </>
  )
}

export default App
