import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import CreateNewUserForm from './components/CreateNewUserForm/CreateNewUserForm';
import FilterBar from './components/FilterBar/FilterBar';

class App extends React.Component {
  state = {
    allFoods: foods,
    foods,
  }

  displayFood() {
    const foodReturned = this.state.foods.map((food) => {
      return (
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={`food-${food.name}`} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={food.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      );
    });
    return foodReturned;
  }

  addFood = foodAdded => {
    this.state.foods.push(foodAdded);

    this.setState({ foods: this.state.foods });
  };

  filterFood = (foodName) => {
    const filteredFoods = this.state.allFoods.filter(food => food.name.toLowerCase().includes(foodName.toLowerCase()));
    this.setState({ foods: filteredFoods });
  };

  render() {
    return (
      <div>
        <div>
          <FilterBar filterFood={this.filterFood}/>
        </div>
        <div className="App">
          <FoodBox food={this.displayFood()} />
        </div>

        <CreateNewUserForm addFood={this.addFood}/>

      </div>
    );
  }
}

export default App;
