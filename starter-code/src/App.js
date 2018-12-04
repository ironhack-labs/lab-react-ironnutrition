import React from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox/FoodBox.jsx'
import Button from './Components/Button/Button.jsx'
import Form from './Components/Form/Form.jsx'
import Searchbar from './Components/Searchbar/Searchbar.jsx';
import foods from "./foods.json"
import './App.css';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      foods: [...foods],
      formShow: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.addFood = this.addFood.bind(this)
    this.filter = this.filter.bind(this)
  }

  addFood(e, state) {
    e.preventDefault()
    let newArray = [...this.state.foods];
    newArray.push(state)
    foods.push(state)
    this.setState({ foods: newArray })
    this.toggleForm()
  }

  toggleForm() {
    this.setState({ formShow: !this.state.formShow })
  }

  filter(filter) {
    this.state.foods = foods
    let newArray = [...this.state.foods].filter((food)=>{
      if (food.name.includes(filter)){
        return food.name
      }
    });
    this.setState({ foods: newArray })
  }

  render() {
    let displayStr
    if (this.state.formShow) {
      displayStr = "block"
    } else {
      displayStr = "none"
    }
    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>
        <Searchbar function={this.filter}></Searchbar>
        <Form style={{ display: displayStr }} addFood={this.addFood}></Form>
        <Button function={this.toggleForm}>Open/Close Form</Button>
        {this.state.foods.map((food, index) => {
          return <FoodBox {...food} ></FoodBox>
        })}
      </div>
    );
  }
}
