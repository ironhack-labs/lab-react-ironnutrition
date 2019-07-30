import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: foods,
      addFoodForm: false,
      search: '',
      todayFood: [],
    };

    this.addNewFood = this.addNewFood.bind(this);
  }

  changeQuantity(food, event) {
    const foods = [...this.state.foods];
    const foodIndex = this.state.foods.indexOf(food);
    foods[foodIndex].quantity = event.target.value;

    this.setState({
      foods: foods,
    })
  }

  addFoodForm() {
    this.setState({
      addFoodForm: !this.state.addFoodForm,
    });
  }

  addNewFood(food) {
    const foods = [...this.state.foods];
    foods.unshift(food);
    this.setState({
      foods: foods,
      addFoodForm: false,
    });
  }

  searchFood(text) {
    this.setState({
      search: text,
    })
  }

  removeTodayFood(index) {
    const todayFood = [...this.state.todayFood];
    todayFood.splice(index, 1);
    this.setState({
      todayFood: todayFood,
    });
  }

  insertTodayFood(food) { //KEEP ON FROM HERE
    const todayFood = [...this.state.todayFood];
    const {...newFood} = food;
    const foods = [...this.state.foods];
    const arrIncludes = todayFood.map(food => food.name);
    const foodIndex = arrIncludes.indexOf(food.name);
    
    if (foodIndex !== -1) {
      for(let x = 0; x < todayFood.length; x += 1) {
        if (todayFood[x].name === food.name) {
          todayFood[x].quantity = parseInt(todayFood[x].quantity) + parseInt(food.quantity);
          if(todayFood[x].quantity <= 0) {
            todayFood.splice(x, 1);
          } 
        }
      }
    } else {
      if (newFood.quantity > 0) {
        todayFood.push(newFood);
      }
    }

    foods[foods.indexOf(food)].quantity = 0;

    this.setState({
      todayFood: todayFood,
      foods: foods,
    });
  }


  render() {
    return (
      <div className="App">
        <div>
        {
        this.state.addFoodForm ? 
          <button onClick={() => this.addFoodForm()}> Hide form</button> :
          <button onClick={() => this.addFoodForm()}> Add new food</button>
        }
        <Search searchMethod={(text) => this.searchFood(text)} search={this.state.search} />
        {this.state.addFoodForm && <Form submitMethod={this.addNewFood} />}
        </div>
        <div id="info-container">
          <div>
            {this.state.foods
              .filter(item => item.name.toUpperCase().includes(this.state.search.toUpperCase()))
              .map((food, index) => <FoodBox key={index} food={food} addQuantity={(food, event) => this.changeQuantity(food, event)} insertTodayFood={(food) => this.insertTodayFood(food)} />)}
          </div>
          <TodaysFoods removeTodayFood={(index) => this.removeTodayFood(index)} foods={this.state.todayFood}/>
        </div>
      </div>
    );
  }
}

export default App;