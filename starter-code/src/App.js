import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import Form from './Components/Form';
import Search from './Components/Search';
import TodaysFood from './Components/TodaysFood';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: foods,
      todaysFood: [],
      formVisible: false
    }
  }

  handleFormVisibility = () => {
    this.state.formVisible ? this.setState({ formVisible: false }) : this.setState({ formVisible: true })
  }

  addNewFood = food => {
    this.state.foods.unshift(food);
    this.setState({
      foods: foods,
    });
  }

  showSearchResults = searchTerm => {
    const searchResults = []
    this.state.foods.map((f) => {
      return f.name.toLowerCase().includes(searchTerm.toLowerCase()) ? searchResults.push(f) : ''
    })
    searchTerm.length > 1 ? this.setState({ foods: searchResults }) : this.setState({ foods: foods })
  }

  addTodaysFood = (foodItem, quantity) => {
    const copyToday = [...this.state.todaysFood]
    const food = {
      name: foodItem.name,
      calories: foodItem.calories,
      image: foodItem.image,
      quantity: quantity
    }
    copyToday.push(food)

    this.setState({ todaysFood: copyToday })

  }


  render() {
    console.log("second", this.state.todaysFood)
    return (
      <div className="App">
        {this.state.formVisible && <Form addNewMethod={this.addNewFood} handleFormVisibility={this.handleFormVisibility} />}
        {!this.state.formVisible && <button onClick={this.handleFormVisibility} className="button is-primary">Add new food</button>}
        <Search showSearchResultsMethod={this.showSearchResults} />
        <div className="columns">
          <div className="column">
            {this.state.foods.map((f, i) => {
              return <FoodBox addTodaysFoodMethod={this.addTodaysFood} name={f.name} calories={f.calories} image={f.image} quantity={f.quantity} key={'food_' + i} />
            })}
          </div>
          <div className="column">
            <h1>Today's food</h1>
            {
              this.state.todaysFood.map((f, i) => {
                return <TodaysFood name={f.name} calories={f.calories} quantity={f.quantity} key={f.name} />
              })
            }
            <h1>Total Calories: {this.state.todaysFood.map(f => f.calories * f.quantity).reduce((acc, cv) => { return acc + cv }, 0)}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
