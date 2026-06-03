import { useReducer } from 'react';
import './App.css';
import Employee from './assets/Employee';

function App() {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);// useReducer hook is used to manage the state of the application. It takes a reducer function and an initial state as arguments and returns the current state and a dispatch function to update the state.

  function reducer(state, action) {
    switch (action.type) {// The reducer function takes the current state and an action as arguments and returns a new state based on the action type.
      case 'add':
        return state + 1;
      case 'minus':
        return state - 1;
      case 'multiply':
        return state * 2;
      case 'divide':
        return state / 2;
      default:
        return state;
    }
  }

  return (
    <>
      <h1>Use Reducer Hook</h1>
      <h2>Value of State: {state} </h2>
      <button onClick={() => dispatch({ type: 'add' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'minus' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'multiply' })}>Multiply</button>
      <button onClick={() => dispatch({ type: 'divide' })}>Divide</button>
      <Employee/>
    </>
  );
}

export default App;