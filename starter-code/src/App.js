import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import food from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Input from './components/Input/Input';
import PriceRender from './components/PriceRender/PriceRender';

class App extends Component {
  state = {
    list: food.map(e => { return { ...e, quantity: 1 } }),
    listPrice: [],
    total: 0
  }
  handlerSearch = (e) => {
    this.setState({
      ...this.state,
      list: food.map(e => { return { ...e, quantity: 1 } }).filter(elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase()))
    })
  }
  handlerInput = (e) => {
    let newState = {
      ...this.state
    }
    newState.list[e.target.attributes.idx.value].quantity = +e.target.value
    this.setState(newState)
  }
  handlerButton = (e) => {
    let newState = { ...this.state }
    let food = {...e}
    let find = newState.listPrice.find(food => food.name === e.name)
    if (find) {
      find.quantity += +e.quantity
      find.calories += e.quantity * +e.calories
    } else {
      newState.listPrice.push(food)
    }
    newState.total += +e.calories * +e.quantity
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Input type="text" placeholder="Search" function={this.handlerSearch} />
        <div className="container">
        <div className="box">
            {this.state.list.map((e, idx) => <FoodBox {...e} key={idx} function={this.handlerInput} buttonFunction={this.handlerButton}/> )}
          </div>
          <div>
            <h3>Today's foods</h3>
            <ul>
            {this.state.listPrice.map((e, idx) => <PriceRender {...e} key={idx} />)}
            </ul>
            <p>Total {this.state.total} Cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
