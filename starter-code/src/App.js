import React, { Component } from "react";
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";
import AddFood from "./component/AddForm";

import './App.css';

class App extends Component {
  state = {
    foods,
    copyFoods: [...foods],
    showForm: false
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    const { copyFoods } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add new food</button>
        {this.state.showForm ? <AddFood /> : null }
        <div className="box">
          {/* {copyFoods.map(eachFood => <FoodBox {...eachFood}/>)} */}
          {copyFoods.map((eachFood, index) => (
            <FoodBox key={index} eachFood={eachFood} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
