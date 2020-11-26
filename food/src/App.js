
import './App.css';
import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from "./FoodBox"
import FoodList from "./FoodList"
import formik, { Formik, Field, Form } from 'formik'

function App() {
  return (
    <div className="App">
     
    <FoodList />
    
    </div>
  );
}

export default App;
