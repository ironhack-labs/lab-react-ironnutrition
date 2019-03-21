import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import FoodBox from './components/FoodBox'
import foods from './foods.json'
import FoodForm from './components/FoodForm'
import Search from './components/Search'


class App extends Component {

  constructor () {

    super()
    this.state = {
      foods:foods,
      copyfoods: foods,
      visible: false
    }

  }

  changeButtonState = e => {
    this.setState({visible: !this.state.visible})
  }


  addNewFood = food => {

    let foodsCopy = [...this.state.foods]
    foodsCopy.push(food)
    this.setState({
      foods: foodsCopy,
      copyfoods: foodsCopy
    })

  }

  searchForFood = foodName => {

    let foodsCopy = [...this.state.copyfoods]
    foodsCopy = foodsCopy.filter(food => {
      return food.name.toLowerCase().includes(foodName.toLowerCase())
    })
    this.setState({
      foods:foodsCopy
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>



          <div className="food-container">

            <Search searchForFood={this.searchForFood}/>

            <button onClick={this.changeButtonState}>Add foods</button>
            {this.state.visible === true && <FoodForm addNewFood={this.addNewFood}/>}


            {this.state.foods.map((food , index) => {
                return <FoodBox key={index} {...food}/>
              })}
          
          </div>

            
        
      </div>
    );
  }
}

export default App;
