import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Button from './components/Button';
import FoodForm from './components/Form';
import SearchBar from './components/SearchBar';





class App extends Component {
  state = {
    list: foods,
    open: false
  };

  showForm = () => {
    this.setState({
      ...this.props,
      open: !this.state.open
    })
  }

  handleSubmit = (e, state) => {
    e.preventDefault();
   
    let newState = {
      ...this.state
    }
    newState.list.push(state)
    this.setState(newState)
}

  searchFunction = (searchWord) => {
    let newState = {
      ...this.state
    }
    newState.list = foods.filter(food => {
      return food.name.indexOf(searchWord) != -1;
    })

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
      <h1>Iron Nutrition</h1>
       <SearchBar Prop={this.searchFunction}/>
        <FoodBox foodsProp={this.state.list}/>
        <FoodForm  functionProp={this.handleSubmit} style={ this.state.open ? "block" : "none"}></FoodForm> 
        <Button functionForm={this.showForm}>Add new food</Button>
      </div>
    );
  }
}

export default App;
