import React from 'react';
import FoodList from './components/FoodList';
import InputSearch from './components/forms/components/InputSeach';
import NewProduct from './components/forms/NewProduct';
import Menu from './components/Menu';
import foods from './foods.json';

class App extends React.Component {
  state = {
    foods: foods,
    menu: [],
    search: '',
  };

  setNewFood = (food) => {
    this.setState((oldState) => ({
      foods: [food, ...oldState.foods],
    }));
  };

  addFoodMenu = (food) => {
    this.setState((oldState) => ({
      menu: [food, ...oldState.menu],
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
            food.calories.toString().includes(search)
        )
      : foods;

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
            <FoodList foods={filteredFoods} addFoodMenu={this.addFoodMenu} />
          </div>
          <div className="column content">
            <Menu foods={this.state.menu} />
            <hr />
            <NewProduct setNewFood={this.setNewFood} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
