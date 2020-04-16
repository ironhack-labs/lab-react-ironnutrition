import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import ShowList from './components/ShowList';
import ResultFood from './components/ResultFood';
import Input from './components/Input';
import AddFood from './components/AddFood';

class App extends Component {

  state = {
    food: foods,
    search: ''
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  addFood = (name, calories, img) => {

      let newFood = {
        "name": name.name,
        "calories": calories.calorias,
        "image": img.img,
        "quantity": 0
      }

      this.setState({
        food: [...this.state.food, newFood],
        isVisible: !this.state.isVisible
      });
  }

  render() {

    const {search} = this.state;

    return (
      <div className="App">

        <Input id="search" name="search" type="text" value={search} action={this.handleInput}/>
        
        <AddFood addFood={this.addFood}/>

        <div className="boxFlex">
          <ShowList filter={search} list={this.state.food}/>
          <ResultFood />
        </div>
        
      </div>
    );
  }
}

export default App;
