import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'
import Form from './components/Form/Form'


export default class App extends Component {

    constructor() {
      super()

      this.state = {
        foods 
      }
    }

    addFoodHandler = (theFood) => {
      const foodCopy = [...this.state.foods];
      foodCopy.push(theFood);
      this.setState({
        foods: foodCopy
      })
    }

  render() {

    return (
      <div className="container">

        {/* <button onClick={() => this.toggle() }>
            {isForm ? hide : show }
        </button> */}
        <Form addTheFood={this.addMovieHandler} />
        {this.state.foods.map(plate => <FoodBox name={plate.name} cal={plate.calories} img={plate.image} quant={plate.quantity}/>)}
      
      </div>
    );
  }
}


