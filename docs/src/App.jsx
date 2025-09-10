import React, { useState } from "react";
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="body">
      <div className="top">
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count - 1)}>Decrement</button> 
      </div>
      <div className="reset">
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App
