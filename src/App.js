import React from 'react'
import FoodBox from './components/FoodBox/FoodBox';
import AddNewFood from './components/AddNewFood/AddNewFood';
import foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';
import SearchBar from './components/SearchBar/SearchBar';
class App extends React.Component {
  state = {
    foods,
    foodList: foods,
    isDisplayed: false,
    addQuantity: 1
  }
  addOneDish = (newDish) => {
    // Add new dish to the array
    const updatedDishes = [newDish, ...this.state.foods];
    // Update the state
    this.setState({ foods: updatedDishes, foodList: foods });
  }
  findFood = (input) => {
    const finder = this.state.foods.filter((el) => el.name.toLowerCase().includes(input.toLowerCase()))
    this.setState({ foodList: finder });
  }
  showForm = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <SearchBar findFood={this.findFood} />
        <div className="columns">
          <div className="column">
            <button type onClick={this.showForm}>Show</button>
            {this.state.isDisplayed
              ? <AddNewFood createNewDish={this.addOneDish} />
              : null
            }
          </div>
          <div className="column">
            <div>
              {this.state.foodList.map((dish, index) => {
                return <FoodBox key={index} dish={dish} />
              })}
            </div>
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
          </div>
        </div>
      </div>
    )
  }
}
export default App;