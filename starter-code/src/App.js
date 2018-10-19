import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import food from './foods.json';
import FoodBox from './foodbox';
import Button from './button';
import Search from './search.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listFood : food
    }
  }

  AddFoodHandler = (name) => {
    console.log(name)
    const items = [...this.state.listFood]
    items.push(name)
    this.setState({
      listFood : items
    })
  }

  liveSearch = (search) => {
    const update = [...this.state.listFood];
    let updated = update.filter( i => {
      return i.name.toLowerCase().search(
        search.toLowerCase()) !== -1;

    })
    this.setState({listFood : updated})
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
        <Search Searching={this.liveSearch}/>
        {
            this.state.listFood.map( (element, index) => {
              return <FoodBox key={index} OneFood={element.name} OneImage={element.image} OneCalorie ={element.calories} />
            })
        }
        <Button AddFoodItems={this.AddFoodHandler}/><br></br>
      </div>
    );
  }
}

export default App;
