import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import food from './foods.json';
import FoodBox from './foodbox';
import Button from './button';
import Search from './search.js';
import Column from './column'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listFood: food,
      foodAdded: [],
      search: ''
    }
  }

  FoodAdd = (food, name, numberCalories) => {
    const foodAdded = [...this.state.foodAdded]

    var test = foodAdded.some(element => {
      return element.name === name
    })
    console.log(test)
    if (!test) {
      foodAdded.push({ quantity: food, name, calories: numberCalories })
    } else if (test) {
      foodAdded.map(element => {
        if (element.name === name) {
          element.quantity += parseInt(food);
          element.calories += parseInt(numberCalories)
        }
      })
    }
    this.setState({ foodAdded: foodAdded })
  }

  AddFoodHandler = (name) => {
    console.log(name)
    const items = [...this.state.listFood]
    items.push(name)
    this.setState({
      listFood: items
    })
  }

  liveSearch = (search) => {
    this.setState({ search: search })
  }

  searchFilter(food) {
    return food.name.toLowerCase().includes(this.state.search)
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
        <Search Searching={this.liveSearch} />
        <Button AddFoodItems={this.AddFoodHandler} /><br></br>
        <Column>
          {
            this.state.foodAdded.map((element, index) => {
              return <TextColumn key={element} OneFoodQuantity={element.quantity} OneFoodName={element.name} OneFoodCalorie={element.calories} />
            })
          }
        </Column>

        {
          this.state.listFood.filter(this.searchFilter.bind(this)).map((element, index) => {
            return <FoodBox AddFood={this.FoodAdd} key={index} OneFood={element.name} OneImage={element.image} OneCalorie={element.calories} />
          })
        }
      </div>
    );
  }
}

class TextColumn extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const AddNumber = this.props.OneFoodQuantity;
    return (
      <div>
        Quantity : {AddNumber} {this.props.OneFoodName} {this.props.OneFoodCalorie} KCal

      </div>
    )
  }
}

export default App;
