import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Search from './components/Search'

class App extends Component {

  state = {
    allFoods: foods,
    showForm: false,
    filteredFoods: foods,
    todaysFood: []
  }

  displayFoods =() => {
    
    return this.state.filteredFoods.map((eachFood, index) => {
      return (
      <FoodBox 
      key={eachFood.name} 
      name={eachFood.name} 
      calories={eachFood.calories} 
      image={eachFood.image}
      index={index}
      addTodaysFood= {this.addTodaysFood}
      />
      )
    })
  }

  addFood = (e) => {
    e.preventDefault();

    let newFood ={
      name: e.target.name.value,
      calories: e.target.calories.value,
      image: e.target.image.value,
      quantity: e.target.quantity.value,

    }

    let updatedFoods = [...this.state.allFoods]
    updatedFoods.unshift(newFood)
    this.setState({
      filteredFoods: updatedFoods,
      allFoods: updatedFoods,
      showForm: false
    })
  }
  
  search = (e) => {
    let foodsArray = this.state.allFoods.filter((eachFood)=> {
      return eachFood.name.toLowerCase().includes(e.toLowerCase())
    })
    this.setState({
      filteredFoods : foodsArray
    })
  }

  displayForm = () => {
    if (this.state.showForm) {
      return (
        <form onSubmit={this.addFood}>
          <input id="name" name="name" type="text" placeholder="add food" />
          <input
            id="calories"
            name="calories"
            type="number"
            placeholder="add calories"
          />
          <input id="image" name="image" type="text" placeholder="add image" />
          <input
            id="quantity"
            name="quantity"
            type="number"
            placeholder="add quantity"
          />
          <input type="submit"/>
        </form>
      );
    } else {
      return <Search search={this.search} showForm={this.showForm} />;
    }
  };
  
  showForm = () => {
    this.setState({
      showForm: true, //true false true false toggle
    });
  };

  totalCalories =() => {
    if(this.state.todaysFood.length){
      return this.state.todaysFood.reduce((acu, cur) => {
        return acu + (cur.calories * cur.quantity)
      }, 0)
    }
    else{
       return 0
    }
  }
  displayTodaysFood = () => {
    if(this.state.todaysFood.length){
      return this.state.todaysFood.map(eachFood => {
        return (
        <li key={eachFood.name}>{eachFood.name}{eachFood.calories * eachFood.quantity}</li>
        )
      })
    }
  }

  addTodaysFood = (index, quant) => {
    let copyTodaysFood = [...this.state.todaysFood]
    let addedFood = {
      name: this.state.filteredFoods[index].name,
      calories: this.state.filteredFoods[index].calories,
      quantity: quant
    }
    copyTodaysFood.unshift(addedFood)
    this.setState({
      todaysFood: copyTodaysFood
    })
  }
  
  render() {
    return (
      <div>

      {this.displayForm()}

      {this.displayTodaysFood()}
      
      Total Calories: {this.totalCalories()}

      {this.displayFoods()}
      
      </div>
    );
  }
}

export default App;
