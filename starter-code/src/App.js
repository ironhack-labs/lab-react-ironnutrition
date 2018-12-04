import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/FoodBox/foodBox'
import Form from './components/Form/form'
import Search from './components/Search/search'

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: foods,
      open: false,
    }
  }

  switchState = () => {
    this.setState({ open: !this.state.open })
  }

  addFood = (e, state) => {
    e.preventDefault();
    let newArray = [...this.state.food]
    newArray.push(state);
    this.setState({ food: newArray })
    this.setState({ open: !this.state.open })
    foods.push(state);

  }
  onChange = (e) => {

    this.state.food=foods;

    let foodNew= Object.values(this.state.food).filter(item => {
      return item.name.includes(e.target.value)
    });

    this.setState({ food: foodNew })

  }

  render() {
    return (
      <div className="App">
        
        <Search search={this.onChange}/>
        {this.state.food.map((food, index) => <Foodbox key={index} foodData={food} />)}
        <button onClick={this.switchState} className="button">Add new foods</button>
        {/* {this.state.open && <Form/>} */}
        <Form addFood={this.addFood} className={this.state.open ? "open" : "close"} />
      </div>
    );
  }
}

export default App;
