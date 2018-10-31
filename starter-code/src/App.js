import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu : foods,
      myFoodList : [],
      matchItems: ''
    }
    console.log(this.state.menu)
  }

  // eventHandler = (event) => {
  //   const menuCopy = [...this.state.menu];
  //   menuCopy.filter((foodItem)=>{foodItem.includes()})
  // }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  addFoodHandler = (theFood) => {
    const menuCopy = [...this.state.menu];
    menuCopy.push(theFood);
    this.setState({
      menu: menuCopy
    })
  }

  deleteFoodHandler = (foodIndex) => {
    const foodListCopy = [...this.myFoodList];
    foodListCopy.splice(foodIndex, 1);
    this.setState({
      myFoodList: foodListCopy 
    })
}

  filteredMenu;

  render() {

    this.filteredMenu = this.state.menu.filter(theFood => theFood.name.toLowerCase().includes(this.state.matchItems.toLowerCase()))
    return (
      <div className="App">
        <input type="text" name="matchItems" value={this.state.matchItems} onChange={(e) => this.handleChange(e)}></input>

      <FoodForm addTheFood={this.addFoodHandler} />
      {
        this.filteredMenu.map((foodItem, index) => {
          return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} />
        })
      }
      {  
        this.state.myFoodList.map((foodItem, index) => {
          return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} />
        })
      }
      </div>
    );
  }
}

export default App;
