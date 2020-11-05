import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFood from './components/AddFood/AddFood';
import FilterActions from './components/FilterActions/FilterActions';

import './App.css';

class App extends React.Component {
  state = {
    allFoods: foods,
    foods,
    cart: [],
    totalCal: 0,
  }

  updateCart = foodInfo => {
    console.log(foodInfo);
    this.setState({ cart: [...this.state.cart, foodInfo] }, () => {
      //this.filterUsers('');
      this.setState({ totalCal: this.state.totalCal + (foodInfo.calories* foodInfo.quantity)});
    });
  };

  displayCart = () => {
    const cartJSX = this.state.cart.map((item, idx) => {

      return (
        <li>
          {item.quantity} {item.name} - {item.calories*item.quantity}
        </li>
      );
    });

    return cartJSX; 
  }

  displayFoods =() => {
    const foodJSX = this.state.foods.map((food, idx) => {
      return (
        <FoodBox food={food} updateCart={this.updateCart}/>
      );
    });

    return foodJSX;    
  }
  filterFoods = (name) => {
    const filteredFoods = this.state.allFoods.filter(food => food.name.toLowerCase().includes(name.toLowerCase()));

    this.setState({ foods: filteredFoods });
  };

  addFood = foodInfo => {
    this.setState({ foods: [...this.state.foods, foodInfo], allFoods: [...this.state.allFoods, foodInfo] }, () => {
      //this.filterUsers('');
    });
  };

  render() {
    return  (
      <div className="App">
        <h2>Iron Nutrition</h2>
        <AddFood addFood={this.addFood} />
        <FilterActions filterFoods={this.filterFoods} />
        <div class="columns">
          <div class="column">
            {this.displayFoods()}
          </div>
          <div class="column">
              <h2>Today's Food</h2>
              <ul>
                {this.displayCart()}
              </ul>
              Total: {this.state.totalCal} Cal
          </div>
        </div>
      </div>
    );
  };

}

export default App;
