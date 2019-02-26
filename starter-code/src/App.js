import React, { Component } from 'react';
import { Input, Button } from 'antd';
import FoodSummary from './components/FoodSummary';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import foods from './data/foods.json';

import './App.css';
import 'antd/dist/antd.css';

const { Search } = Input;

class App extends Component {
  state = {
    availableFoods: foods,
    renderedFoods: foods,
    consumedFoods: [],
    displayFoodForm: false
  };

  toggleFoodForm = () => {
    this.setState({ displayFoodForm: !this.state.displayFoodForm });
  }

  submitNewFood = (newFood) => {
    const newFoods = [...this.state.availableFoods];
    newFoods.push(newFood);
    this.setState({
      availableFoods: newFoods,
      renderedFoods: newFoods,
      displayFoodForm: false
    });
  }

  addConsumedFood = (newFood) => {
    let updatedFoods = [...this.state.consumedFoods];
    updatedFoods.push(newFood);
    //Esta es una forma de impedir duplicados.
    let uniqueFoods = updatedFoods.filter((el, i, ar) => ar.map(ie => ie.name).indexOf(el.name) === i);
    //Esto es para consolidar los registros
    updatedFoods = uniqueFoods.map((el, i) => {
      let quantity = updatedFoods.map((ie, j, ar) => ar.filter(iie => iie.name === ie.name)).map(ar => ar.map(ie => parseInt(ie.quantity, 10)).reduce((ac, cv) => ac + cv, 0));
      return { ...el, quantity: Math.max(quantity[i], 0) }
    }).filter(el => el.quantity > 0); //Y esto evita bugs al borrar

    this.setState({
      consumedFoods: updatedFoods
    });
  }

  deleteItemFromSummary = (index) => {
    let updatedFoods = [...this.state.consumedFoods];
    updatedFoods.splice(index, 1);
    this.setState({ consumedFoods: updatedFoods });
  }

  filterFoods = (e) => {
    let { value } = e.target;
    let visibleFoods = [...this.state.availableFoods];
    visibleFoods = visibleFoods.filter(el => el.name.toUpperCase().includes(value.toUpperCase()));
    this.setState({
      renderedFoods: visibleFoods
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <Button onClick={this.toggleFoodForm}
          style={{ width: "20vw" }}> {(this.state.displayFoodForm) ? `Cancel` : `Add new food!`} </Button>
        {
          this.state.displayFoodForm &&
          <FoodForm submit={this.submitNewFood} />
        }
        <Search
          className="Searchbar"
          placeholder="Search"
          onSearch={(e) => this.filterFoods(e)}
          onChange={(e) => this.filterFoods(e)}
          style={{
            width: '100%',
            margin: '2vh 0 3vh'
          }}
        />
        <div className="two-col">
          <div className="FoodBox-container">
            {
              this.state.renderedFoods.map((el, i) => (
                <FoodBox
                  key={i}
                  {...el}
                  addConsumedFood={this.addConsumedFood}
                />
              ))
            }
          </div>
          <FoodSummary
            className="FoodSummary"
            consumedFoods={this.state.consumedFoods}
            removeItem={this.deleteItemFromSummary}
          />
        </div>
      </div>
    );
  }
}

export default App;
