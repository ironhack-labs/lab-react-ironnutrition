import React from 'react';
import foods from './foods.json';
import FoodBox from './components/food-box/FoodBox';
import FoodForm from './components/food-form/FoodForm';
import Search from './components/search/Search';
import TodayFood from './components/today-foods/TodayFood';

class App extends React.Component {
  state = {
    data: foods,
    showForm: false,
    search: '',
    today: [],
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  searchFood = (input) => {
    this.setState({ search: input });
  };

  addFood = (food) => {
    food.quantity = 0;
    this.setState((prev) => ({
      data: [food, ...prev.data],
      showForm: false,
    }));
  };

  addTodayFood = (food) => {
    this.setState((prev) => {
      if (this.state.today.includes(food)) {
        return { today: [...prev.today] };
      } else if (food.quantity === 0) {
        return { today: [...prev.today] }
      } else {
        return { today: [...prev.today, food] };
      }
    });
  };

  deleteTodayFood = (name) => {
    this.setState((prev) => {
      return ({ today: prev.today.filter(food => food.name !== name) })
    }
  )}

  render() {
    const displayedFoods = this.state.data.filter((food) => {
      return food.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column">
              <button
                className="button is-primary my-3"
                onClick={this.toggleForm}
              >
                {this.state.showForm ? 'Close' : 'Add Food +'}
              </button>
              {this.state.showForm && <FoodForm addFood={this.addFood} />}
              <Search searchFood={this.searchFood} />
              {displayedFoods.map((food, i) => (
                <FoodBox key={i} food={food} addTodayFood={this.addTodayFood} />
              ))}
            </div>
            <div className="column">
              <TodayFood foods={this.state.today} deleteTodayFood={this.deleteTodayFood}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
