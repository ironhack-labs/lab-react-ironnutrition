import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import AddFoodForm from './AddFoodForm'

class App extends Component {
  constructor() {
    super(); // this runs React Component´s constructor
    this.state = {
      foods: foods,
      showform: false
    };
  }


  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.foods];
    foodCopy.unshift(theFood);
    this.setState({
      foods: foodCopy
    })
    this.toggleForm() 
  }


  toggleForm() {
    this.setState({
      showForm: !this.state.showForm   // toggles the state of just this property
    })
  }

  render() {
    let form   // to have it undefined initially
    if (this.state.showForm){form = <AddFoodForm addTheFood={this.addFoodHandler} />}
    else form = undefined;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Food Box</h1>
        </header>
       
     <br></br>
     <button onClick={() => this.toggleForm()} >Add New Food</button>
        
        {form}  {/* renders the form if toggled to true */}
      
      
        <br></br>
      
        <ul>
       {this.state.foods.map(food =>
       <FoodBox food = {food} ></FoodBox>
       )
      }
       </ul>
      </div>
    );
  }
}


export default App;
