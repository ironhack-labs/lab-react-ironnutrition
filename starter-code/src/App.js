import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FoodForm from './FoodForm';


class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: foods,
      // search: "",
      foodFormVisible: false
    }
  }

  showFoodForm = () => {
    this.setState({foodFormVisible: !this.state.foodFormVisible});
  }

  addNewFood = (food) => {
    this.state.foods.unshift(food)
    this.setState({foods: this.state.foods, foodFormVisible: !this.state.foodFormVisible})
  }

  searchFood = (input) => {
    // if (input == "") return 
    console.log(input)
    let filtered = foods.filter(e => e.name.includes(input));
    console.log(filtered)
    this.setState({foods: filtered})
  }

  render() {
    return (
      <main className="section">
        <div className="container">
        <h1 className="title">IronNutrition</h1>
        {!this.state.foodFormVisible ?
          <button className="button" onClick={this.showFoodForm}>Add new food</button>
          :
          <FoodForm newFood={food => this.addNewFood(food)}/>
        }
        <input className="input" type="text" placeholder="Search 🍖" onChange={(input) => this.searchFood(input.target.value)} />
          {this.state.foods.map(element => <FoodBox key={element.name} {...element}/> )}
        </div>
      </main>
    );
  }
}

export default App;
