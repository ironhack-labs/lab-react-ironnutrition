import FoodBox from './components/FoodBox/FoodBox.js';
import Form from './components/Form/Form.jsx';
import Search from './components/Search/Search.jsx';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import './App.css';

foods.map(food => food.id = uuidv4());

class App extends React.Component {
  state = {
    foods: [...foods],
    todaysFood: [],
    formDisplayed: false,
    search: ''
  };

  foodsToPrint = [...this.state.foods];


  addFood = (food) => {
    const newFood = {
      id: uuidv4(),
      quantity: 0,
      ...food
    };

    this.foodsToPrint = [newFood, ...this.foodsToPrint]

    this.setState(prevState => {
      return {
        foods: [newFood, ...prevState.foods]
      }
    });
  };

  displayForm = () => {
    if(!this.state.formDisplayed) {
      this.setState({ formDisplayed: true })
    }
  }

  hideForm = () => {
    if(this.state.formDisplayed) {
      this.setState({ formDisplayed: false })
    }
  }

  searchFood = (event) => {
    const foodsFiltered = [...this.state.foods];
    this.setState({search: event.target.value});

    if(event.target.value !== ''){
      this.foodsToPrint = foodsFiltered.filter(f => f.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      this.foodsToPrint = [...this.state.foods];
    }
  }

  addToTodaysFood = (food) => {
    const { todaysFood } = this.state;

    if(food.quantity > 0){
      if (todaysFood.some(f => f.id === food.id)) {
        const newTodaysFood = [...todaysFood];
        const index = newTodaysFood.findIndex((f => f.id === food.id))
  
        newTodaysFood[index].quantity += food.quantity;
  
        this.setState({ todaysFood: newTodaysFood })
      } else {
        this.setState({ todaysFood: [food, ...todaysFood] })
      }
    }

  };

  removeTodaysFood = (id) => {
    const { todaysFood } = this.state;

    this.setState({
      todaysFood: todaysFood.filter(f => f.id !== id)
    })
  }

  render(){

    return (
      <div className="App container">
        <h1>IronNutrition</h1>
        <div className='add-plus-search'>
          <Search search={this.state.search} searchFood={this.searchFood} />
          <button className="btn btn-success" onClick={() => this.displayForm()}>Add new Food</button>
        </div>
        <div className="main-content-div">
          <div className="food-items-div">
          {
            this.foodsToPrint.map(food => {
              return (
                <div className="food-item" key={food.id}>
                  <FoodBox food={food} addToTodaysFood={this.addToTodaysFood}/>
                </div>
              )
            })
          } 
          </div>
          <div className="todays-food-div">
            <h3>Today's Food</h3>
            <ul className="todays-food-list">
              {
                this.state.todaysFood.map(food => {
                  return (
                    <li className="todays-food-item mt-3" key={food.id}>
                      {`${food.quantity} ${food.name} = ${food.calories * food.quantity} cal`}
                      <button className="remove-todays-food" onClick={() => this.removeTodaysFood(food.id)}>
                        <i class="bi bi-trash"></i>
                      </button>
                    </li>
                  )
                })
              }
            </ul>
            <p className="text-muted">{`Total: ${this.state.todaysFood.reduce((acc, curr) => acc + curr.calories * curr.quantity, 0)}`} cal</p>
          </div>
        </div>
          {
            this.state.formDisplayed && <Form addFood={this.addFood} hideForm={() => this.hideForm()}/>
          }
      </div>
    );
  };
};

export default App;
