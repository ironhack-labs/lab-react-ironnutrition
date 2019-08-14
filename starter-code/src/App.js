import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods,
      formShown: false
    }
    console.log(foods)
  }

  componentDidMount() {
    const newListFoods = this.state.foods.slice(0, 7)
    console.log(newListFoods)
    this.setState( {foods: newListFoods})
  }

  addOneFood = elm => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(elm)

    this.setState({
        foods: foodsCopy
    })
  }

  showForm = () => {
    this.setState({
      formShown: true
    })
  }
  


  render() {

    return (
      <div className="App">
        <button className="btn-add" onClick={this.showForm}>Add new food</button>
        <section>
          {this.state.formShown ? <AddFood addFood={this.addOneFood} /> : null}  
          
          {/* Pasamos la función addOneFood() como props "polizón" para ser usada en el componente AddFood
          como this.props.addFood(this.state)*/}
        </section>
        
        <section>
          {
            this.state.foods.map((elm, idx) => {
              return <FoodBox key={idx} foodName={elm.name} foodImage={elm.image} foodCalories={elm.calories} />
            })
          }
        </section>
      </div>
    );
  }
}

export default App;
