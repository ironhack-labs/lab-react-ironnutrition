import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox.js';
import AddButton from './components/AddButton/AddButton.js';

class App extends React.Component {

  render() {

    let foodsList = foods.map((foodElem, i)=>{return <FoodBox key={i} food={foodElem}></FoodBox>})

    return (
      <div className="App">
        <AddButton></AddButton> 
        {foodsList}
      </div>
    );
  }
}

export default App;
