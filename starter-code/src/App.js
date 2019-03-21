import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./foods.json"
import 'bulma/css/bulma.css'
import Search from "./components/Search"
import ListFoods from './components/ListFoods';
import AddFoods from "./components/AddFoods"

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: Data,
      filterat: Data
    }
  }
  

  
  addNewFoods = theFood => {
    const foodsCopy = [...this.state.filterat]
    foodsCopy.push(theFood)
    this.setState({
       foods: foodsCopy,
        searchstring :""
    })
}
searchFood = findFood => {
  
  let foodCopy = [...this.state.filterat]
  foodCopy = Data.filter((arg)=>{
  return arg.name.includes(findFood)})
  this.setState({
    filterat: foodCopy
  })

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
        {/* <FoodBox /> */}
        
        < Search searchFood={this.state.foods}/>
        <ListFoods foods={this.state.foods}/>
        <AddFoods addNewFoods = {this.addNewFoods}/>
       
      </div>
    );
  }
}

export default App;
