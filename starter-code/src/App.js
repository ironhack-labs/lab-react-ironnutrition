import React, { Component } from 'react';
import jsondata from './foods.json'
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css'
import AddFood from './components/AddFood';
import AddToList from './components/AddToList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      oldfoods: jsondata,
      foods : jsondata,
      showForm: false,
      addToList: [],
      total : 0
    }
  }
  handleChange = (e) => {
    let newfood = this.state.oldfoods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if (!e.target.value) {newfood = this.state.oldfoods}
    this.setState({
      foods: newfood
    })
  }
  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food)
    this.setState({
      foods: foodsCopy
    })
  }
  addTodayHandler = (e) => {
    const newArray = [...this.state.addToList]
    const index = newArray.findIndex(x => x.name === e.name)
   
    if (index === -1) {
      newArray.push(e)
    } else {
      newArray[index].quantity += e.quantity;
    }
    this.setState({
      addToList : newArray
    })
    this.calcTotal()
  }
  removeTodayHandler = (e) => {
    this.setState({
      addTolist: this.state.addToList.splice(this.state.addToList.indexOf(e),1)
    })
    this.calcTotal()
  }
  calcTotal = () => {
    let total = {calories:0}
    if (this.state.addToList[0] !== undefined) {total = this.state.addToList.reduce((a, b) => ({calories: a.calories + (b.calories*b.quantity)}));}
    this.setState({
      total: total.calories
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <AddFood addTodayHandler={this.addTodayHandler} addFood={this.addFoodHandler} onClick={this.displayForm}>{this.state}</AddFood>
        </div>
        <div>
          <form><input type="text" className="input" value={this.filter} onChange={this.handleChange} placeholder="Search..." /></form>
        </div>
        <div className='columns'>
          <div className='column'>{this.state.foods.map((e,i)=><FoodBox addTodayHandler={this.addTodayHandler} key={i}>{e}</FoodBox>)}</div>
          <div className='column'>
            <h1>Today's foods</h1>
            <ul>
              {this.state.addToList.map((e,i)=> (<AddToList removeTodayHandler={this.removeTodayHandler} key={e.name}>{e}</AddToList>))}
            </ul>
            <p>Total: {this.state.total}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
