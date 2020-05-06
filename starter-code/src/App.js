import React, { Component } from 'react';
import './App.css';
import Card from './components/foodBox/FoodBox'
import foods from './foods.json'
import 'bulma/css/bulma.css'
import FoodForm from './components/form/Form'

class App extends Component {

  constructor (props) {

    super(props)

    this.state = {

      foods: foods,
      addNewFood: false
    }

  }


  pushNewFood = newFood => {

    const foodCopy = [...this.state.foods]
    foodCopy.push(newFood)
    this.setState({
      foods: foodCopy
    })

  }

  showForm = () => {

    this.setState({

      addNewFood: !this.state.addNewFood
      
    })
    console.log(this.state.addNewFood)
  }


  render() {

    return (
      
      <div>

        {this.state.addNewFood ? <FoodForm pushNewFood = {this.pushNewFood} /> : null }
        <button className="button is-info" onClick={this.showForm} >Add new food</button>
        <div>{this.state.foods.map((food, idx) => <Card  key={idx} name={food.name} 
        calories={food.calories} image={food.image} quantity={food.quantity} /> )}</div>
      
      </div>
    )

  }

}

export default App;
