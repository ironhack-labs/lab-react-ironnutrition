import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import NewFoodForm from './components/NewFoodForm/NewFoodForm';
import Search from './components/Search/Search';

class App extends Component {
  state = {
    foods: [...foods],
    showForm: false,
    addFoodButton: true,
    filter: ''
  }

  showForm() {
    if (!this.state.showForm && this.state.addFoodButton) {
      this.setState({
        showForm: true,
        addFoodButton: false
      })
    } else {
      this.setState({
        showForm: false,
        addFoodButton: true
      })
    }
  }

  addFood = (food) => {
    const newFood = {
      ...food
    }
    console.log(newFood)
    this.setState({ foods: [newFood, ...this.state.foods] })
  }

  filterFoods = (event) => {
    console.log(event.target.value)

    this.setState({
      filter: event.target.value,
      foods: this.state.foods.filter(food => food.name.toUpperCase().includes(event.target.value.toUpperCase()))
    })
  }

  render() {
    return(
      <div className="App">
        <button 
        className={`button ${this.state.addFoodButton ? "is-info" : "is-danger"} mb-4 mt-4`} 
        onClick={() => this.showForm()}
        >
          {this.state.addFoodButton ? "Add new food" : "Cancel"}
        </button>
        {this.state.showForm && <NewFoodForm showForm={() => this.showForm()} addFood={this.addFood} foods={this.state.foods}/>}
        <Search filterFoods={this.filterFoods} filter={this.state.filter}/>
        <FoodBox foods={this.state.foods}/>

      </div>
    )
  }
}

export default App;
