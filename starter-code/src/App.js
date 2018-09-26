import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import food from './foods.json'
import FoodBox from './FoodBox'
import Form from './Form'
import Search from './Search'
import Checkout from './Checkout'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allFood: food,
      formShowing: false
    }
  }
  onSubmit = (fields) =>{
    console.log('carajo', fields)
    const oldFood = this.state.allFood
    oldFood.push(fields)
    this.setState({
      allFood: oldFood
    })
  }

  toggleForm = () =>{
    this.setState({
      formShowing: !this.state.formShowing
    })
    console.log(this.state.formShowing)
  }

  searchFood = (words) =>{
    console.log("test", words)

    var modifiedList =food.filter(word => word.name.toLowerCase().includes(words.toLowerCase()))
    this.setState({
      allFood: modifiedList
    })
  }

  render() {
    // console.log(this.state.allFood);
    const eachFood = this.state.allFood.map((food, index)=>{
      return <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
    });

    return (
      <div className="App">
        <h1>Nutri</h1>
        <Search searchFood={food => this.searchFood(food)}/>

        <div className="add-new">

          <button
            onClick={()=> this.toggleForm()}
            className="button is-info toggle-btn">
            {this.state.formShowing? 'Hide The Form' : 'Show Me The Form'}
          </button>
          {this.state.formShowing &&   <Form onSubmit={ fields => this.onSubmit(fields)} /> }
      
        </div>

        {eachFood}
        <Checkout/>




      </div>
    );
  }
}

export default App;
