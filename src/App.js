import React from 'react';
import './App.css';
import FoodList from './components/FoodList'

function App() {
  return (
    <div style={{width:1000, margin:"0 auto"}}>
    <h1 style={{textAlign:"center"}} className="title is-1">Iron nutrition</h1>
    <FoodList />
    </div>
  );
}

export default App;
