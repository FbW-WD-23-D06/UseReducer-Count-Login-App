import { useReducer, useState } from 'react'
import './App.css'

const reducer = (counter , action)=>{
  console.log("action",action);
  // console.log("state",state);
  switch(action.type){
    case "increment":{
      return { count : counter.count + 1};
    }
    case "decrement":{
      return {count : counter.count - 1}
    }
  }
}
function App() {
  // initialState object
  const initialState = {count : 0}
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch]= useReducer(reducer, initialState);
  
  console.log(counter);
  // const increament = ()=>{
  //   setCounter(counter + 1)
  // }
  // const decreament = ()=>{
  //   setCounter(counter - 1)
  // }

  const increament = ()=>{
    dispatch({type:"increment"})
  }
  const decreament = ()=>{
    dispatch({type:"decrement"})
  }

  return (
    <>
    <div>
      <button onClick={increament}>+</button>
      <h1>{counter.count}</h1>
      <button onClick={decreament}>-</button>
   </div>
    </>
  )
}

export default App
