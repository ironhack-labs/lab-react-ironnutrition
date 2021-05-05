import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBoxContainer from './component/foodBoxContainer'

function App() {
  return (
    <div className="App">
      <div className='body'>
        <FoodBoxContainer />
      </div>
    </div>
  );
}

export default App;