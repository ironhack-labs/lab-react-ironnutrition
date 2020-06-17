import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import Foodbox from './components/Foodbox'
import FoodForm from'./components/FoodForm'
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';

class App extends React.Component {

  state = {
    fullFoods: foods,
    foods: foods,
    todayFoods: [],
    showForm: false
  }

  addFood = (e) => {

    e.preventDefault();

    console.log(e.target.name.value);

    let newItem = {
      "name": e.target.name.value,
      "calories": e.target.calories.value,
      "image": e.target.imageSrc.value,
      "quantity": 0
    }

    this.setState({showForm: false, fullFoods: [...this.state.foods, newItem]});

  }

  addTodayFood = (item) => {

    this.setState({
      todayFoods: [...this.state.todayFoods, item]
    });

  }
  
  searchFood = (e) => {

    this.setState({
      foods: this.state.fullFoods.filter((item) => {return item.name.startsWith(e.target.value)})
    })

  }

  render() {return (
    <div className="App">
      {(!this.state.showForm) ? <button onClick={() => {this.setState({showForm: true})}}>Add Food</button> : ''}
      {(this.state.showForm) ? <FoodForm onAdd={this.addFood}/> : ''}
      <Search onSearch={this.searchFood}/>
      <Foodbox items={this.state.foods} onAdd={this.addTodayFood}/>
      <TodayFoods items={this.state.todayFoods}/>
    </div>
  )}

}

export default App;
