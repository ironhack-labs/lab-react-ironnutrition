import React from 'react';
import {FoodBox} from './components/FoodBox/FoodBox'
import {FoodBoxList} from './components/FoodBoxList/FoodBoxList'
import {AddFood} from './components/AddFood/AddFood'
import './App.css';
import 'bulma/css/bulma.css';


function App() {
  return (
    <div>
      <FoodBoxList />
    </div>
  );
}

export default App;
