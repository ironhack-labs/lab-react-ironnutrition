import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Foods from './components/Foods/Foods'
import FoodForm from './components/FoodForm/FoodForm'

function App() {
  return (
    <div className="App">
      <FoodForm />
  
      <Foods />

    </div>


  );
}

export default App;
