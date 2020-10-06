import React from 'react';
import FoodList from './components/FoodList';
import InputSearch from './components/forms/components/InputSeach';
import NewProduct from './components/forms/NewProduct';
import foods from './foods.json';

class App extends React.Component {
  state = {
    foods: [],
  };

  componentDidMount() {
    this.setState({
      foods: foods,
      search: '',
    });
  }

  setNewFood = (food) => {
    this.setState((oldState) => ({
      foods: [food, ...oldState.foods],
    }));
  };

  searchFoods = (string) => {
    this.setState({
      search: string,
    });
  };

  render() {
    const { foods, search } = this.state;
    const filteredFoods = search
      ? foods.filter(
          (food) =>
            food.name.includes(search) ||
            food.calories.toString().includes(Number(search))
        )
      : foods;
    console.log(filteredFoods);
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <InputSearch searchFoods={this.searchFoods} />
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <FoodList foods={filteredFoods} />
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
            <hr />
            <NewProduct setNewFood={this.setNewFood} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
