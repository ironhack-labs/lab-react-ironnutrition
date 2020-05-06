import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox.js'
import Search from './components/Search';


class App extends Component {
  state = {
    foods,
    filteredFoods:[],
  }
  searchFood= (e) =>{
    //const foundFood = [... this.state.foods]
    const  filteredFoods= [...this.state.foods].filter(food=> food.name.includes(e.target.value))
    this.setState({filteredFoods})
    
    
  }
  render() {
    return (
      <div className="App">
      <Search fcn={this.searchFood}/>
        {this.state.foods.map((food, idx)=> <FoodBox food={food} key={idx}></FoodBox>)}
      </div>
    );
  }
}

export default App;
