import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'

import Foodbox from './Foodbox/Foodbox'

class App extends Component {

  constructor() {
    super()
    this.foodsArr = [...foods]
    this.state = {
      anotherFood: this.foodsArr.splice(0, 7)
    }
  }

  // addFood = () => {
  //   const foodsCopy = [...foods]
  //   this.state.foods
  //   foodsCopy.push
  //   this.setState({})
  // }


  render() {
    console.log(this.foodsArr)
    return (
      <div>
        <button>Add</button>
      </div>
      <section>
        {
          this.state.anotherFood.map((elm, idx) => <Foodbox image={elm.image} name={elm.name} calories={elm.calories} />)
        }
      </section>
    )
  }
}

export default App;
