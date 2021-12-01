import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './Foodbox';
import AddFoodBtn from './addFoodBtn';
import AddFood from './AddFood';
import foods from './foods.json';


function App() {
  return (
    <div>
    <div>
        <AddFoodBtn />
    </div>
      <div>
        { foods.map((oneFood ,index) => 
        <Foodbox key={index} name={oneFood.name} calories={oneFood.calories} image={oneFood.image} />) 
        }
      </div>
      
    </div>
  );
}

export default App;
