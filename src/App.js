import React, { Component } from 'react';

import FoodBox from './components/FoodBox/FoodBox';
import CreateFoodActions from './components/CreateFoodActions/CreateFoodActions';
import SearchActions from './components/SearchActions/SearchActions';
import FoodsCart from './components/FoodsCart/FoodsCart';

import './App.css';

import foods from './foods.json';
class App extends Component {
  state = {
    allFoods: foods,
    foods,

    foodsCart: [],
  }
  
  displayFoods = () => {
    return this.state.foods.map(food => <FoodBox food={food} updateCart={this.updateCart} deleteItem={this.deleteItem}/>);
  }

  addFood = newFood => {
    this.setState({ foods: [...this.state.foods, newFood], allFoods: [...this.state.allFoods, newFood] })
  }

  filterFoods = foodName => {
    const filteredFoods = this.state.allFoods.filter(food => food.name.toLowerCase().includes(foodName.toLowerCase()));

    this.setState({ foods: filteredFoods });
  }

  updateCart = productInfo => {
    const existentProductIndex = this.state.foodsCart.findIndex(foodInfo => {
      return foodInfo.name === productInfo.name;
    });

    if (existentProductIndex >= 0) {
      const foodsCartCopy = [...this.state.foodsCart];
      foodsCartCopy[existentProductIndex].quantity += productInfo.quantity;

      this.setState({ foodsCart: foodsCartCopy })
    } else {
      this.setState({ foodsCart: [...this.state.foodsCart, productInfo] });
    }
  }

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
  
        <CreateFoodActions addFood={this.addFood} />

        <SearchActions filterFoods={this.filterFoods} />
        
        <section className="foods-info-container">
          <div className="display-foods">
            {this.displayFoods()}
          </div>
          <div className="foods-cart">
            <FoodsCart foodsInfo={this.state.foodsCart} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;