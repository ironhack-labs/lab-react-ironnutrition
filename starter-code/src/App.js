import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'
import CustomButton from './components/CustomButton/CustomButton'
import AddForm from './components/AddForm/AddForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: foods,
      showForm: false
    }
  }

  addNewFood = function (name,cal,imgPath){
      let foodsCopia={...this.state.foods}
      foodsCopia.push({
        "name": name,
        "calories": cal,
        "image": imgPath,
        "quantity": 0
      })
      this.setState({ ...this.state, foods: foodsCopia })

  }.bind(this)

  toggleShowForm = function () {
    this.setState({ ...this.state, showForm: !this.state.showForm })
  }.bind(this)

  render() {

    let foodboxs = this.state.foods.map((food, index) => {
      return (<FoodBox name={food.name} quantity={food.quantity} img={food.image} cal={food.calories} id={index} />)
    })
    return (

      <div className="App">
        <CustomButton clase="is-primary is-link" callbackFunction={this.toggleShowForm}>Add food</CustomButton>
        {this.state.showForm && <AddForm />}
        {foodboxs}

        <CustomButton clase="is-primary is-link">Add food</CustomButton>
      </div>
    );
  }
}

export default App;
