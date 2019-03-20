import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

import FoodBox from './components/FoodBox'
import AddFormModule from './components/AddForm'
import Search from './components/Search'
import ListFoods from './components/ListFoods'

import foods from './foods.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      foods,
      total: 0,
      todayFoods: []
    }
  }

  callForm = () => this.setState({...this.state, visible: !this.state.visible})

  addNewFood = theFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    this.setState({
        foods: foodsCopy
    })
  }

  updateState = (listFoods) => {
    this.setState({...this.state,
      foods: listFoods
  })
  }

  addTodaysFoods = (name, quantity, calories) => {
    let copyTodayFoods = [...this.state.todayFoods]

    copyTodayFoods.push({name, quantity, calories})
    console.log(copyTodayFoods)
    this.setState({ todayFoods: copyTodayFoods })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <button className="button" onClick={this.callForm}>Add a new Food</button>
        <Search filterFoods={this.state.foods} updateState={this.updateState}/>
        { this.state.visible && <AddFormModule addFood={this.addNewFood} /> }
        <div className="flex">
        <div>
            { this.state.foods.map((oneFood, index) => <FoodBox key={index} {...oneFood} addTodaysFoods={this.addTodaysFoods} />) }
        </div>
        <div className="box my-box">
            <h3>Today's Food</h3>
            <ul>
                { this.state.todayFoods.map((oneFood, index) => <ListFoods key={index} {...oneFood} />) }
            </ul>
            <p>Total: {this.state.total} calories</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
