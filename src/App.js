import React, { Component } from 'react';
import './App.css';
import bulma from 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AddFood from './AddFood';

export default class App extends Component {

  state = {
    foods : foods
  };

  addFoodHandler = theFood => {
    const foodsCopy = [...this.state.foods];
    theFood.id = [...this.state.foods].pop().id + 1
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  
  }

  render (){
    return (
    <div className="container">
      <div className="head">
        <h1>IronNutrition</h1>
        <div className="addBtn"><button className="button is-info">Add New Food</button></div>
      </div>
      <AddFood addTheFood={this.addFoodHandler}/>
      <Search />
      {this.state.foods.map(food =>
      <FoodBox food={food} />
      )}
    </div>
    )
  }

}
