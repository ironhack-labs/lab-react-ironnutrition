//Monika Swidzinska
import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from "./components/FoodBox"
import Form from "./components/Form"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search:"",
            foods: foods,
            showfoods: foods,
            formStyle: {
              display: "none"
            },
            pickedFood: [],
            counter: [],
            sumCalories: [],
            
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    addHandler = () => {
    if(this.state.formStyle.display === "none"){
      this.setState({
        formStyle: {
        display: "block"
      }}
      )}
  }

  submitHandler = (e, state) => {
    e.preventDefault();

    this.state.showfoods.push(state);

    this.setState({
      showfoods: this.state.showfoods,
      formStyle: {
        display: "none"
      }
    })
}

    handleSearchChange(event) {
        let inputValue= event.target.value;
        this.setState({
            search:inputValue
        })
    }
    addFoodHandler = (food, state) => {
    var pickedFoodCopy = [...this.state.pickedFood]
    var counterCopy = [...this.state.counter]
    pickedFoodCopy.push(food)
    counterCopy.push(state.quantity)
        this.setState({
     pickedFood: pickedFoodCopy,
     counter: counterCopy
  })

  this.calculateCalories(food.calories, state.quantity)
}

addFoodHandler = (food, state) => {
  var pickedFoodCopy = [...this.state.pickedFood]
  var counterCopy = [...this.state.counter]

  pickedFoodCopy.push(food)
  counterCopy.push(state.quantity)
  
  this.setState({
    pickedFood: pickedFoodCopy,
    counter: counterCopy
  })

  this.calculateCalories(food.calories, state.quantity)
}
calculateCalories = (cal, amount) =>{
    var sumCaloriesCopy = [...this.state.sumCalories]
    var calories = cal*amount
    sumCaloriesCopy.push(calories)
    this.setState({
      sumCalories: sumCaloriesCopy
    })
}



    render() {
    let sum = 0;

    for (let i = 0; i < this.state.sumCalories.length; i++) {
      sum += this.state.sumCalories[i];
    }

         return (
            <div className="page-view">
            <div>
            <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
            <button onClick={this.addHandler}>Add New Food</button>
        <Form style={this.state.formStyle} submitHandler={this.submitHandler} />
            <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>

            
            {this.state.showfoods
                .filter(food =>
                food.name.toLowerCase().includes(this.state.search.toLowerCase())
                )
                .map((food, index) => (
                <FoodBox
                    key={food.name}
                    name={food.name} 
                    addFoodHandler={this.addFoodHandler}
                    calories={food.calories}
                    image={food.image}
                    quantity={food.quantity}
                />
            ))}
            </div>
      
            <div className="d-flex">
  
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
          {this.state.pickedFood.map((food, index)=> 
            <li>{this.state.counter[index]} {food.name} = {food.calories * this.state.counter[index]}</li>
            )}
          </ul>
          <strong>Total: {sum} cal</strong>
        </div>
        </div>
            </div>
         );
  }
}

export default App;

// Hints about he ironutrition exercise:
// do not put an onChange event handler on the input field. Put an onClick eventHandler on the button. Ignore the step mini icons in the input field
// use the name of the food as an identifier. Do not use the index
// use map to modify the foods array. Map doesn’t modify the original array.
// you do not have to make it possible to file in any number in the input field. You only have to make the increment button work.