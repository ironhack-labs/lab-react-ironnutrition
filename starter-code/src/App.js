import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import ButtonFood from './components/ButtonFood';
import FormFood from './FormFood';
import FoodItem from './components/FoodItem';
import Search from './components/Search';





class App extends Component {
  
  state = {
    foodsAll: foods,
    showForm: false
  }
showForm = () => {
    const newState = { ...this.state };
    newState.showForm = !newState.showForm;
    this.setState(newState);
}

addFood = (newFood) => {
  const newState = {...this.state}
  newState.foodsAll.push(newFood)
  this.setState({newState})

}

filterListFood = (filtro) => {
 
  const newState = { ...this.state };

  newState.foodsAll = newState.foodsAll.filter((food) => {
      return food.name.indexOf(filtro) != -1;
  });
  this.setState(newState);
};
  
  render() {
    return (
      <div className="App">
        <Search searchFoodFunction={this.filterListFood}/>
        <FoodBox foodsProps={this.state.foodsAll}/>
        <ButtonFood onClick={this.showForm} >Show Form</ButtonFood>
        <FormFood className={this.state.showForm ? "open" : "close"} toAction={this.addFood} />
        </div>
    );
  }
}

export default App;
