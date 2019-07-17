import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import 'bulma/css/bulma.css'
import AddFood from './components/AddFood';
import TodaysFood from './components/TodaysFood';



class App extends Component {

  state = {
    list: foods,
    showForm: false,
    today: []
  }

  addFood = food => {
    this.setState(prevState => {
      return {
        list: [...prevState.list, food],
        showForm: false
      }
    })
  }

  show = ()=>{
    this.setState(prev => {
      return {
        showForm: true
      } 
    })
  }

  addToday = (food) => {
    this.setState(prevState=> {
      return {
        today: [...prevState.today, food]
      }
    })
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.show}>Add a food</button>
        {this.state.showForm ? <AddFood addFood={this.addFood}/> : ''}
        
        <p>Today's food</p>
        {this.state.today.length > 0 ? <ul>{this.state.today.map(elem => <TodaysFood {...elem}/>)}</ul> : <p>Total: 0 cal</p>}

        {this.state.list.map(elem =>{
          return <FoodBox food={elem} addToday={this.addToday}/>
        })}
        
      </div>
    );
  }
}

export default App;
