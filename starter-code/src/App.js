import React, { Component } from 'react';
import foods from './foods.json'
import FoodBox from './component/FoodBox'
import AddForm from './component/addForm'
import './App.css';

console.log(foods)


class App extends Component {
  state = {
    foods,
    copyFoods: [...foods]
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(e)
  }
  render() {
    const {copyFoods} = this.state;
    return (
      <div className="App">
        <AddForm handleSubmit={this.handleSubmit} />
        <div className="box">
        {/* {copyFoods.map(eachFood => <FoodBox {...eachFood}/>)} */}
        {copyFoods.map((eachFood, index) => <FoodBox key={index} eachFood = {eachFood}/>)}
</div>
      </div>
    );
  }
}

export default App;
