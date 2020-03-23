import React, { Component } from "react";
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";
import AddFood from "./component/AddForm";

import './App.css';

class App extends Component {
  state = {
    foods,
    copyFoods: [...foods],
    showForm: false,
    newFood: {
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    },
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  };

  valueApp = (e) => {
  // console.log("App -> valueApp -> e", e)
  const { name, value } = e.target
  const { newFood } = this.state
  // document.querySelectorAll('.input-form')
  if (name === 'image') {
    const input = document.getElementById("image-file")
    let fileReader = new FileReader()
    fileReader.readAsDataURL(input.files[0])
    fileReader.onloadend = function(e) {
      newFood[name] = `${e.target.result}`
    }
  }
  newFood[name] = value;
  this.setState({ newFood})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { newFood } = this.state
    this.setState(preventDefault => ({
      copyFoods: [...preventDefault.copyFoods, newFood]
    }))

  }
  render() {
    const { copyFoods } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleForm}> Add new item! </button>
        {this.state.showForm ? (<AddFood handleChange={this.valueApp} handleSubmit={this.handleSubmit}/>) : null }
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
