import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Formulario from "./components/formulario"


class IronNutrition extends Component {
  constructor() {
    super()
    this.state = {
      food: foods,
      formStatus: false,
      formText: "Show",
      form: ""
    }
  }
  addFoodHandler = (newFood) => {
    const foodCopy = [...this.state.food]
    foodCopy.push(newFood)
    this.setState({
      food: foodCopy
    })
  }
  ChangeStatus = () => {
    this.setState({
      formStatus: !this.state.formStatus
    })
  }
  Search = (e) => {
    const foodCopy = [...foods]
    let result =foodCopy.filter((a)=>a.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({food: result })
  }

  render() {
    return (
      <div className="IronNutrition">
        <input type="text" name="search" placeholder="Search..." onChange={this.Search}></input>

        {this.state.formStatus ? (
          <div>
            <button onClick={this.ChangeStatus}>hide</button>
            <Formulario newFood={this.addFoodHandler} />
          </div>
        ) : (
            <div>
              <button onClick={this.ChangeStatus}>show</button>
            </div>
          )}

        <button onClick={this.addFood} >Add new foods</button>
        {this.state.food.map((a, i) => <FoodBox data={a} key={i} />)}

      </div>
    );
  }
}

export default IronNutrition;
