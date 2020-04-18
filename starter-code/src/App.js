import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    appFoods: foods
  }

  //APP NECESITA FUNCION PARA CAPTAR NEW FOOD
  addNewFood = (food) => {
    let addList = [...this.state.appFoods]
    addList.push(food)
    this.setState({
      appFoods: addList,
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.appFoods.map((item, index) => {
            return <FoodBox key={index} comida={item}/>
        })}
        <AddFood click={this.addNewFood} />
      </div>
    );
  }
}

export default App;

