
import { useState } from 'react';
import './App.css'


function App() {

  let [count, setCount] = useState(15);

  // let count =15;

  
  const increaseCount =function(){

    console.log("Button Clicked" + Math.random())
    count=count+1
    setCount(count)
    console.log(count)

  }

  const decreaseCount =function(){

    console.log("Button Clicked" + Math.random())
    count=count-1
    setCount(count)
    console.log(count)

  }

  return (
    <>
        <h1>My Fisrt App Using React{count}</h1>

        <h2>Count : {count}</h2>

        <button onClick={increaseCount}> increase {count}</button>

        <br/>
        <button onClick={decreaseCount}> decrease {count}</button>

        <p> Footer : {count}</p>
    </>
  )
}

export default App
