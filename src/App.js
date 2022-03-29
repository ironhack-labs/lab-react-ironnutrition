import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import NewFoodForm from './components/NewFoodForm/NewFoodForm';
import Search from './components/Search/Search';
import List from './components/List/List';

class App extends Component {
  state = {
    foods: [...foods],
    showForm: false,
    addFoodButton: true,
    filter: '',
    todaysFoods: []
  }

  filteredFoods = [...foods]

  showForm = () => {
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

    this.setState({ foods: [newFood, ...this.state.foods] })
  }

  filterFoods = (event) => {
    console.log(event.target.value)

    this.setState({
      filter: event.target.value,
      foods: this.filteredFoods.filter(food => food.name.toUpperCase().includes(event.target.value.toUpperCase()))
    })
  }

  addToList = (food) => {
    const newFood = {
      ...food
    }

    this.setState({ todaysFoods: [newFood, ...this.state.todaysFoods] })
  }

  removeFromList = (food) => {
    const foodToRemove = {
      ...food
    }

    this.setState({ todaysFoods: [...this.state.todaysFoods.filter(food => food.name !== foodToRemove.name)] })
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
        {this.state.showForm && <NewFoodForm showForm={this.showForm} addFood={this.addFood} foods={this.state.foods}/>}
        <Search filterFoods={this.filterFoods} filter={this.state.filter}/>
        
        <div className='foodbox-list'>
          <div>
            {this.state.foods.map((food, index) => {
              return <FoodBox key={index} food={food} addToList={this.addToList}/>
            })}
          </div>

          {this.state.todaysFoods.length && 
          <List foods={this.state.todaysFoods} removeFromList={this.removeFromList}/>
          }
        </div>
      </div>
    )
  }
}

export default App;
