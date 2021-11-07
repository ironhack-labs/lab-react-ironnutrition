import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';
import foods from './foods.json';

class App extends React.Component {
  state = {
    foodToDisplay: foods,
    formVisible: false,
    searchInputState: '',
    todayFood: [],
  };

  handleFormVisibility = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  addFoodHandler = (FoodInfo) => {
    const foodToDisplayCopy = [...this.state.foodToDisplay, FoodInfo];
    this.setState({ foodToDisplay: foodToDisplayCopy });
  };

  setSearchField = (searchInput) => {
    this.setState({ searchInputState: searchInput });
  };

addTodayFoodHandler = (FoodInfo) => {
  const todayFoodCopy = [...this.state.todayFood, FoodInfo]
  this.setState({ todayFood: todayFoodCopy });
}

  render() {
    let filteredProducts = this.state.foodToDisplay.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.searchInputState.toLowerCase());
    });
    return (
      <div>
        <h1>Iron-Nutrition</h1>
        <div>
          <button className="main-btn" onClick={this.handleFormVisibility}>
            Add new food
          </button>
          {this.state.formVisible === true && (
            <AddFood
              addFoodHandler={this.addFoodHandler}
              handleFormVisibility={this.handleFormVisibility}
            />
          )}
        </div>
        <div>
          <SearchBar setSearchField={this.setSearchField} />
        </div>
        <div className="main-section">
          <div className="foodbox-container">
            {filteredProducts.map((food) => (
              <FoodBox
                key={food.id}
                {...food}
                addTodayFoodHandler={this.addTodayFoodHandler}
              />
            ))}
          </div>
          <div className="chosen-food-container">
            <h2>Today's foods:</h2>
            <ul>
              {this.state.todayFood.map((food) => {
                return <TodayFood {...food} />;
              })}{' '}
            </ul>
            <h3>
              Total:{' '}
              {this.state.todayFood.reduce(function(a, b){
        return a + (b.calories * b.quantity);
    }, 0)}{' '}
              cal
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
