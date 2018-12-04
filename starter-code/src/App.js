import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'


class App extends Component {

    constructor() {
      super()

      this.state = {
        foods 
      }
    }

    handleSubmit(event) {
      event.preventDefault();
    }
  


  render() {

    return (
      <div className="foodBoxContainer">

        <div className="box">
          
          <form onSubmit={this.handleFormSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={this.state.title} />

              <label>Calories:</label>
              <input type="text" name="cal" value={this.state.director} />

              <label>Image:</label>
              <input type="checkbox" name="img" checked={this.state.hasOscars} />
              
              <input type="submit" value="Submit" />
          </form>
        </div>


        {this.state.foods.map(plate => <FoodBox name={plate.name} cal={plate.calories} img={plate.image} quant={plate.quantity}/>)}
      
      </div>
    );
  }
}

export default App;
