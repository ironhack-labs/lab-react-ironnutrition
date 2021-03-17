import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodies from './Components/Foodbox'

function App() {
  return (
    <div className="App">
      
        <h1>Hello Fellow Kids </h1>
        <Foodies />
  
    </div>
  );
}

export default App;
