import React, { Component } from 'react';
import './App.css';

import 'bulma/css/bulma.css';

import FoodBox from './components/FoodBox/FoodBox';
import CreateFoodActions from './components/CreateFoodActions/CreateFoodActions';
import SearchActions from './components/SearchActions/SearchActions';
import FoodsCart from './components/FoodsCart/FoodsCart';

import foods from './foods.json';

class App extends Component {
  state = {
    allFoods: foods,
    foods,

    foodsCart: [],
  }

  displayFoods = () => {
    return this.state.foods.map(food => <FoodBox food={food} updateCart={this.updateCart}  deleteItem={this.deleteItem} />)
  }

  addFood = newFood => {
    this.setState({ foods: [...this.state.foods, newFood], allFoods: [...this.state.allFoods, newFood]})
  }

  filterFoods = foodName => {
    const filteredFoods = this.state.allFoods.filter(food => food.name.toLowerCase().includes(foodName.toLowerCase()));
  
    this.setState({ foods: filteredFoods });
  }

  updateCart = productInfo => {
    // console.log(productInfo)
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
    console.log(existentProductIndex);
  }

  deleteItem = productName => {
    const existentProductIndexAllFoods = this.state.allFoods.findIndex(foodInfo => {
      return foodInfo.name === productName;
    });

    const existentProductIndexFoods = this.state.foods.findIndex(foodInfo => {
      return foodInfo.name === productName;
    });

    const existentProductIndexFoodsCart = this.state.foodsCart.findIndex(foodInfo => {
      return foodInfo.name === productName;
    });

    if (existentProductIndexAllFoods >= 0) {
      const allFoodsCopy = [...this.state.allFoods];
      allFoodsCopy.splice(existentProductIndexAllFoods, 1);

      this.setState({ allFoods: allFoodsCopy });
    }

    if (existentProductIndexFoods >= 0) {
      const foodsCopy = [...this.state.foods];
      foodsCopy.splice(existentProductIndexFoods, 1);

      this.setState({ foods: foodsCopy });
    }

    if (existentProductIndexFoodsCart >= 0) {
      const foodsCartCopy = [...this.state.foodsCart];
      foodsCartCopy.splice(existentProductIndexFoodsCart, 1);

      this.setState({ foodsCart: foodsCartCopy });
    }
  }

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
  
        <CreateFoodActions addFood={this.addFood}/>

        <SearchActions filterFoods={this.filterFoods}/>

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
