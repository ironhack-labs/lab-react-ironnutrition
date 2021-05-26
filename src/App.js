import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import Search from './Components/Search';


class App extends React.Component {
  state = {
    foods: foods,
    searchValue: "",
  };

  handleForm = () => {
    const foodForm = document.getElementById("foodForm");
    foodForm.classList.toggle("hidden");
  }

  handleAddFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });

    this.handleForm();
  };

  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };


  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

  return (
    <div className="App">

        <Search
          value={this.state.searchValue}
          callbackFn={this.handleSearchValue}
        />

      <div>
        <button onClick={this.handleForm}>Add New Food</button>
        <div id="foodForm" className="hidden" >
          <FoodForm callbackFn={this.handleAddFood}/>
        </div>
      </div>

      <div className="flex">
        <div>
          {filteredFoods.map((food) => {
            return (
              <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
              />
            );
          })}
        </div>
        <div>
          <h2>Today's Foods:</h2>
          <p>Total: 0 cal</p>
        </div>
      </div>

      
    </div>
    );
  }
}

export default App;
