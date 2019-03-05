import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      addFood: false,
      foods: foods,
      filteredFoods: foods

    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const calories = e.target.name.value;
    const image = e.target.name.value;
    this.setState({
      foods: [...this.state.foods, {name, calories, image, quantity: 0}]
    });
  }
  
  changeAddFoodState = () => {
    this.setState({
      addFood: !this.state.addFood
    });
  }

  setFilteredFoods = (filteredFoods) => {
    this.setState({
      filteredFoods: filteredFoods
    });
  }


  render() {
    if(this.state.addFood){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            <label for="name">Food Name: </label>
            <input type="text" name="name" id="name"></input>
            <label for="calories">Food Calories: </label>
            <input type="number" name="calories" id="calories"></input>
            <label for="image">Food Image: </label>
            <input type="text" name="image" id="image"></input>
            <input type="submit" value="Add New Food!"></input>
          </form>
          <br></br>
          <Search foods={this.state.foods} filteredFoods={this.state.filteredFoods} setFilteredFoods={this.setFilteredFoods}/>
          {this.state.filteredFoods.map((food,index) => {
            return (
              <div  className='food-list' key={index}>
                <FoodBox {...food}/>
              </div>
            );
          })}
          <TodayFoodList />
        </div>
      );
    } else{
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <button onClick={this.changeAddFoodState}>Add New Food</button>
          <br></br>
          <Search foods={this.state.foods} filteredFoods={this.state.filteredFoods} setFilteredFoods={this.setFilteredFoods}/>
          {this.state.filteredFoods.map((food,index) => {
            return (
              <div className='food-list' key={index}>
                <FoodBox {...food}/>
              </div>
            );
          })}
          <TodayFoodList />
        </div>
      );
    }
  }
}

export default App;
