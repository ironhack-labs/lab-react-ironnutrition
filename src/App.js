import React from 'react';
import './App.css';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <h1>IRON NUTRITION</h1> 
      
      {<FoodList />}
            
    </div>
  );
};

export default App;