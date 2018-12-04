import React, { Component } from 'react';
import foods from "./foods.json"
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"

class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: foods,
      showForm: false
    }
  }

  toggleForm = ()=>{
    this.setState({showForm: !this.state.showForm})
  }

  addMovieHandler = (theFood) => {
    const updatedFoods = [...this.state.foods];
    updatedFoods.push(theFood);
    this.setState({
      foods: updatedFoods
    })
  }

  render() {
    return (
      <div className="App">
      <button className="button is-success" onClick={this.toggleForm}>Add foods</button>
      {this.state.showForm && <AddFoodForm addTheFood={this.addMovieHandler} /> }
        {this.state.foods.map((elem,i)=>(
        <FoodBox key={i}
        {...elem}
        />
        ))}
      </div>
    );
  }
}

export default App;
