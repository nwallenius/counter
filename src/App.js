import React from 'react';
import './App.css';
import Counter from './Counter/Counter';
import CounterHooks from './CounterHooks/CounterHooks';


const App = () => {
  return (
    <div className="App">
      <Counter /> 
      <CounterHooks />
    </div>
  );
}

export default App;
