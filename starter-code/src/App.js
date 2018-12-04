import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox.js'

class App extends React.Component {


  render() {

    let foodsList = foods.map((foodElem, i)=>{return <FoodBox key={i} food={foodElem}></FoodBox>})

    return (
      <div className="App">
        {foodsList}
      </div>
    );
  }
}

export default App;
