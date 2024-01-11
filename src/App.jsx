import { useReducer, useState } from 'react'
import './App.css'

const reducer = (counter , action)=>{
  console.log("action",action);
  // console.log("state",state);
  switch(action.type){
    case "increment":{
      return { ...counter,count : counter.count + 1};
    }
    case "decrement":{
      return {...counter,count : counter.count - 1}
    }
    case "changeName":{
      counter.name = action.newName
      return counter.name
      // return {...counter,name : action.newName }
    }
  }
}
function App() {
  // initialState object
  const initialState = {count : 0, name: "John"}
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch]= useReducer(reducer, initialState);
  
  console.log(counter);
  // const increament = ()=>{
  //   setCounter(counter + 1)
  // }
  // const decreament = ()=>{
  //   setCounter(counter - 1)
  // }

  const increment = ()=>{
    dispatch({type:"increment"})
  }
  const decrement = ()=>{
    dispatch({type:"decrement"})
  }

  const changeName =(e)=>{
    dispatch({type:"changeName", newName : e.target.value})
  }

  return (
    <>
    <div>
      <button onClick={increment}>+</button>
      <h1>{counter.count}</h1>
      <button onClick={decrement}>-</button>
      <br />
      <input type='text'  onChange={changeName}/>
      <h2>Your name is {counter.name}</h2>
   </div>
    </>
  )
}

export default App
