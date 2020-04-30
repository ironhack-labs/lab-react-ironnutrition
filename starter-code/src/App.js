import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from "./component/foodbox"
import Addform from "./component/addform"
import Search from "./component/search"
import Group from "./component/group"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      foodsFiltered: "",
      toggle: false,
      today: []
    };
    }

  toggleHandler = () => {
      this.setState({
        toggle: !this.state.toggle
      })
    }


  createHandler = (food) => {
   
    
    food.quantity = 0

    const {
      foods
    } = this.state

    const foodsCopy = [...foods]
    foodsCopy.unshift(food)
   
      this.setState({
        foods: foodsCopy
      } )
      
  }

  filterHandler = (search) => {
   
    this.setState({
      foodsFiltered: this.state.foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
    })
  }

  addToday = (food) => {
    const todayCopy = [...this.state.today]
    const todayOnlyNames = todayCopy.map(oneFood => oneFood.name)
    const repeated = todayOnlyNames.filter(name => food.name === name)
    if (repeated.length != 0) {
     const index = todayOnlyNames.indexOf(repeated[0])
     todayCopy[index].quantity+= food.quantity
     todayCopy[index].calories+= (food.calories * food.quantity)
     console.log(food.calories * food.quantity)
     this.setState({
      today: todayCopy
    })
    return
    } 
    food.calories = food.calories * food.quantity

    this.setState({
      today: [...this.state.today, food]
    })
  }

  deleteToday = (idx) => {
    const todayCopy = [...this.state.today]
    todayCopy.splice(idx, 1)

    this.setState({
      today: todayCopy
    })
  }



  render() {
    const {
      foods,
      toggle,
      foodsFiltered,
      today,
    } = this.state

    const foodsArr = !foodsFiltered ? foods : foodsFiltered;
    
    return (
      <div>
      <Search foods={foods} filterHandler={this.filterHandler} />
      <button className="button is-large" onClick={this.toggleHandler}>{toggle ? "Close" : "Add Food"}</button>
      {toggle && <Addform createHandler = {this.createHandler}/> }
      <div className="columns">
        <div className="column">
          {foodsArr.map((food, index) => <FoodBox {...food} key={index} addToday={this.addToday} /> )}
        </div>
        <Group today={today} deleteOne={this.deleteToday}/>
      </div>
      </div>
    );
  }
}

export default App;