import { useReducer } from 'react';
import './App.css';
import Employee from './assets/Employee';

function App() {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return state + 1;
      case 'minus':
        return state - 1;
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
      <Employee/>
    </>
  );
}

export default App;