import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood'
import SearchFood from './components/SearchFood'

class App extends Component {
  state={
    data:foods,
    found:""
  }

 //no sabemos is es food o foods xD
addFood = (food) =>{
  this.setState((prevState)=>{
    return ({data: [...prevState.data, food]})
  })
}
searchFood(e) {
const newFood = e.target.value
const filterFood = foods.filter(el =>
   el.name.includes(newFood)
   )
this.setState({data: filterFood})
 }

 searchChange(e){
   this.setState({found: e.target.value})
 }

  render() {
    return (
      <div className="App">
      <input type="search" name="search" onChange={this.searchFood}/>
      <AddFood addFood={this.addFood}/>
  
      {this.state.data.map((el,index)=>{
        return(<FoodBox
          key={index}
          {...el}
          food={this.state.data}/>)
      })}

      </div>
    );
  }
}


export default App;
