import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import Form from './Components/Form.jsx';

function App() {
  return (
    <div className="App">
      <FoodBox />
      <Form />
    </div>
  );
}

export default App;
