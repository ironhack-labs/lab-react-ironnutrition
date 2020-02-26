import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import Form from './Form';
import Search from './Search';


class App extends Component {
  state={
    foods:foods,
    open:false,
    newFood:foods
  }
  addTheFood(elm){
    let newFood = {...this.state}
    newFood.foods.push(elm)
    this.setState(newFood)
    this.switchMenu()
    console.log(newFood)
    console.log(elm)

  }

  
  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  seachFood(e){
      let currentList = [];
      let newFood = [];
  if (e.target.value !== "") {
    currentList = this.state.foods;
    newFood = currentList.filter(food => {
      const lc = food.name.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);
    });
  } else {
    newFood = this.state.foods;
  }
  this.setState({
    foods: newFood
  });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome  to IronNutrition</h1>
        </header>
        <Search seachFood={(e)=> {this.seachFood(e)}}></Search>
        <button onClick={() => this.switchMenu()}>{this.state.open ? "Close" : "Open"} menu</button>
        {this.state.open && <Form addTheFood={(elm)=>{this.addTheFood(elm)}}></Form>}
       
        {this.state.foods.map(food =>(
          <FoodBox name={food.name} image={food.image} calories={food.calories}></FoodBox>
        ))}
      
      </div>
    );
  }
}

export default App;
