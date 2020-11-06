import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import CreateNewUserForm from './components/CreateNewUserForm/CreateNewUserForm';
import FilterBar from './components/FilterBar/FilterBar';
import FoodsCart from './components/FoodsCart/FoodsCart';

class App extends React.Component {
  state = {
    allFoods: foods,
    foods,

    foodsCart: [],
  }

  displayFood() {
    return this.state.foods.map((food) => <FoodBox food={food} updateCart={this.updateCart}/>);
  }

  addFood = foodAdded => {
    this.state.foods.push(foodAdded);

    this.setState({ foods: this.state.foods });
  };

  filterFood = (foodName) => {
    const filteredFoods = this.state.allFoods.filter(food => food.name.toLowerCase().includes(foodName.toLowerCase()));
    this.setState({ foods: filteredFoods });
  };

  updateCart = foodInfo => {
    this.setState({ foodsCart: [...this.state.foodsCart, foodInfo] });
  }

  render() {
    return (
      <div>
        <div>
          <FilterBar filterFood={this.filterFood}/>
        </div>
        <section className="foods-section">
        <div className="foods-list">
          {this.displayFood()}
        </div>
        <div>
          <FoodsCart foodsInfo={this.state.foodsCart}/>
        </div>
        </section>

        <CreateNewUserForm addFood={this.addFood}/>

      </div>
    );
  }
}

export default App;
