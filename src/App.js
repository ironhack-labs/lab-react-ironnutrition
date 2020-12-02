import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';




class App extends React.Component {

  state = {
    foodArray: foods,
    searchFood: '',
    isForm: false,
    quantity: 1,
    foodList: [],
    totalCalories: 0
  }




  addOneFood = (newFood) => {
    const updatedFoods = [...this.state.foodArray, newFood];
    this.setState({ foodArray: updatedFoods });
  }

  toggleForm = () => {
    this.setState({ isForm: !this.state.isForm });
  }

  filteredFood = (foodSearchInput) => {
    const foodArray = [...this.state.foodArray];
    const foundFood = foodArray.filter((food) => {
      if (food.name === foodSearchInput) {
        return true;
      }
    });
    this.setState({ searchFood: foundFood });
  }



  handleTodaysList = (foodObj, quantity) => {
    const foodList = [...this.state.foodList, foodObj]

    this.setState({ foodList, quantity });

  }

  render() {
    return (
      <div className="App">

        <h1>Iron Nutrition</h1>

        <button onClick={this.toggleForm}>Show food form</button>
        { this.state.isForm
          ? <AddNewFood createFood={this.addOneFood} isFormToggle={this.toggleForm} />
          : null
        }

        <SearchBar foodSearch={this.state.foodArray} filteredFoodSearch={this.filteredFood} />

        <div className="columns">
          <div className="column">

            {this.state.searchFood
              ?
              this.state.searchFood.map((food, index) => {
                return (
                  <FoodBox
                    key={index}
                    foodItem={food}
                    quantityNumber={this.state.quantity}
                    handleTodaysList={this.handleTodaysList}
                  />
                )
              })
              :
              this.state.foodArray.map((food, index) => {
                return (
                  <FoodBox
                    key={index}
                    foodItem={food}
                    quantityNumber={this.state.quantity}
                    handleTodaysList={this.handleTodaysList}
                  />
                )
              })
            }
          </div>
          <div className="column">
            <TodaysFood foodList={this.state.foodList} foodQuantity={this.state.quantity} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
