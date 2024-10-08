import { useReducer, useState } from 'react';
import './App.css';
import MyComponent from './components/mycomponent';
import { useEffect } from 'react';
function reducer(state,action){
  switch(action.type){
     case 'incremented_age':{
         return {age:state.age+1}
     }
     default:{
      console.log("something went wrong");
      
     }
  }
}
function App() {
  const initialstate={age:42}
  const[state,dispatch]=useReducer(reducer,initialstate)
  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }
  return (
    <>
      <div className='state'>
          <h1>{state.age}</h1>
          <button onClick={handleButtonClick}>changeAge</button>
      </div>
    </>
  );
}

export default App;
