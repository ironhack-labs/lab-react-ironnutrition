import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from '../src/foods.json' 
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import Search from './components/Search'


import { Switch, Route } from 'react-router-dom'


class App extends Component {
  constructor(){
    super()

    this.state = {
      foods,
      filteredFoods: [],
      addForm: false
    }

  }
  
  handleButtonState = (e) => {
    e.preventDefault()

    console.log(this.state.addForm)
    this.setState({ addForm: !this.state.addForm })

  }

  filterFood = food => {
    let filteredFoodsCopy = [...this.state.filteredFoods]
    
    filteredFoodsCopy = this.state.foods.filter(elem => elem.name == food)

    // filteredFoodsCopy ? this.setState({ filteredFoods: filteredFoodsCopy }) : null
    this.setState({ filteredFoods: filteredFoodsCopy })
  }

  addTheFood = food => {
    const foodsCopy = [...this.state.foods]
    console.log(foodsCopy)
    foodsCopy.push(food)
    console.log(foodsCopy)

    this.setState({
      foods: foodsCopy
    })
    console.log(this.state.foods)
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


        {/* <Switch>
          <Route path='/' exact component={FoodBox} />
          <Route path='/addFood' component={AddFood} />
        </Switch> */}


        <button onClick={this.handleButtonState}>Add Food</button>
          {
          this.state.addForm ? <AddFood addTheFood={this.addTheFood} /> : null
          }

        <Search filterFood={this.filterFood}/>

        {
          this.state.filteredFoods.length ? this.state.filteredFoods.map((food, idx) => <FoodBox key={idx} {...food} />) : this.state.foods.map((food, idx) => <FoodBox key={idx} {...food} />)
        }

      </div>
    );
  }
}

export default App;
