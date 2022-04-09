import React from 'react';
import './App.css';
import Counter from './Counter/Counter';

const App = () => {
  const initialValue = 2;
  return (
    <div className="App">
      <Counter value = {initialValue}/>
      
    </div>
  );
}

export default App;
