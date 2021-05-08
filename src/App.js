import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodBox/FoodBox.js';
import FoodForm from './components/form/FoodForm.js';
import Search from './components/search/Search.js';
import TodaysFoods from './components/todaysFoods/TodaysFoods.js';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      formVisible: false, 
      filteredFoods: foods,
      todaysFoods: []
    }
  }

  handleFormVisibility = () => {
    this.setState({formVisible: true})
  }

  handleNewFood = (newFood) => {
    if(
      newFood.name === ''
    ) {
      alert("Error")
      return
    }
    foods.push(newFood)
    this.setState({formVisible: false})
  }

  handleSearch = (search) => {
    const filteredFoods = foods.filter( (food) => {
      return food.name.includes(search)
    })
    this.setState({filteredFoods: filteredFoods}) 
  }

  addToTodaysFoods = (food) => {
    this.setState({todaysFoods: this.state.todaysFoods.concat(food)})
  }

  deleteItemTodaysFoods = (index) => {
    let todaysFoodsCopy = [...this.state.todaysFoods]

    todaysFoodsCopy.splice(index, 1)
    this.setState({todaysFoods: todaysFoodsCopy})
  }

  render() {
    return (
      <div className="App container">
        <div className="columns">
          <div className="column is-half">
            <button className="button" onClick={this.handleFormVisibility}>Add new food</button>
            {this.state.formVisible && <FoodForm addFood={this.handleNewFood} />}
            <Search onSearch={this.handleSearch} />
            <ul>
              {this.state.filteredFoods.map(food => (
                <li className="food-item" key={food.name}>
                  <FoodBox addToTodaysFoods={this.addToTodaysFoods} food={food} />
                </li>
              ))}
            </ul>
          </div>
          <div className="column is-half mt-6">
            <TodaysFoods removeItemByIndex={this.deleteItemTodaysFoods} items={this.state.todaysFoods}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
