import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox'
import Form from './components/Form'
import foods from './foods.json'


class App extends Component {

  state = {
    foods:[...foods],
    show: false,
    buttonAdd: 'Add new food',
    form: {
      name: '',
      calories: '',
      image: '',
      quantity: 0
    },
    addFoods: [],
    totalCalories: 0
  }

showForm = () => {
  const {show, buttonAdd} = this.state
  this.setState({show: !show,
                 buttonAdd: buttonAdd === 'Add new food' ? 'cancel' : 'Add new food'
  })
}

handleInput = e => {
const { form } = this.state
const key = e.target.name
form[key] = e.target.value
this.setState( {form} )
}

addFood = () => {
  const newFood ={
    name: this.state.form.name,
    calories: Number(this.state.form.calories),
    image: this.state.form.image,
    quantity: 0
  }

  const newArrFood = this.state.foods.unshift(newFood)
  this.setState ({[foods]: newArrFood})
}



showAddedFood = (name) => {
  const food = this.state.foods.find(food => food.name === name)

  this.setState({addFoods: [...this.state.addFoods, food]})
}

  render() {
const {name, image, calories} = this.state.form

    return (

      <div className="App">
        <h1>IronNutrition</h1>
        <button onClick={this.showForm}>Add food</button>
        {this.state.show && <Form 
        handleInput={this.handleInput}
        name={name}
        calories={calories}
        image={image}
        /> }
        {this.state.foods.map((food, index) => (
          < FoodBox key={index} name={food.name} 
        image={food.image} 
        calories={food.calories}
        quantity={food.quantity}
        />
        ))}
          
       
      </div>
    )
  }
}



export default App;
