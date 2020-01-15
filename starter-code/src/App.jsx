
import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Food from "./components/FoodBox"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search:"",
            foods: foods,
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    handleSearchChange(event) {
        let inputValue= event.target.value;
        this.setState({
            search:inputValue
        })
    }
    sendInfo(food, state) {
        this.setState({
      name: this.name,
      quantity:this.quantity,
      calories: this.calories

    })
    }

    addFoodHandler = (food, state) => {
  var pickedFoodCopy = [...this.state.pickedFood]
  var counterCopy = [...this.state.counter]

  pickedFoodCopy.push(food)
  counterCopy.push(state.count)
  
  this.setState({
    pickedFood: pickedFoodCopy,
    counter: counterCopy
  })

  this.calculateCalories(food.calories, state.count)
}

//     increment = ()=>{
//     this.setState({
//         quantity: this.state.quantity+1,
//     })
//   }
    render() {
         return (
            <div className="page-view">
            <div>
            <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
            <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>
            
            {this.state.foods
                .filter(food =>
                food.name.toLowerCase().includes(this.state.search.toLowerCase())
                )
                .map(food=>
                <Food
                    key={food.name}
                    name={food.name} 
                    calories={food.calories}
                    image={food.image}
                    quantity={food.quantity}
                />
            )}
            </div>
            <div>
                <h2 className="is-size-2 has-text-weight-bold">Today's foods</h2>
                
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