import FoodBox from './components/FoodBox/FoodBox.js';
import Form from './components/Form/Form.jsx';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import './App.css';

foods.map(food => food.id = uuidv4());

class App extends React.Component {
  state = {
    foods: [...foods],
    formDisplayed: false
  };

  addFood = (food) => {
    const newFood = {
      id: uuidv4(),
      ...food
    };

    console.log(food, newFood);

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

  render(){
    return (
      <div className="App container">
        <h1>IronNutrition</h1>
        <button className="btn btn-primary" onClick={() => this.displayForm()}>Add new Food</button>
        <div className="food-items-div container">
         {
            this.state.foods.map(food => {
              return (
                <div className="food-item" key={food.id}>
                  <FoodBox food={food} />
                </div>
              )
            })
         } 
        </div>
          {
            this.state.formDisplayed && <Form addFood={this.addFood} hideForm={() => this.hideForm()}/>
          }
      </div>
    );
  };
};

export default App;
