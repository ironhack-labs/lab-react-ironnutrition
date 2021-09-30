import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import SearchBar from './Search';
import { useState } from 'react';

class App extends React.Component {
  state = {
    foods: foods
  }

  changeFoodNameHandler = (event) => {

    this.setState({
      newFoodsName: event.target.value
    })
  }

  changeFoodCaloriesHandler = (event) => {
    this.setState({
      newCaloriesAmount: event.target.value
    })
  }

  addNewFood = () => {
    let foodsCopy = [...this.state.foods]
    foodsCopy.push({ name: this.state.newFoodsName, calories: this.state.newCaloriesAmount })

    this.setState({
      foods: foodsCopy,
      newFoodsName: '',
      newCaloriesAmount: ''
    })
  }

  searchFood = (event) => {
    let foodsCopy = [...this.state.foods]
    for (let i = 0; i < foodsCopy.length; i++) {
      const element = foodsCopy[i];
      if (foodsCopy[i].name.includes(event.target.value)) {
        //store this food in new array
        return
      }
      else {
        <div>Sorry, no corresponding food found..</div>
      }
    }

    this.setState({
      foods: foodsCopy
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FoodFoodFood</h1>
          {/* <SearchBar />
          <ul>
            {foods.map((food) => (
              <li key={food.id}>{food.name}</li>
            ))}
          </ul> */}
        </header>


        <div>
          <input type="text" name="newFoodsName" id="" placeholder="Name of the food" onChange={this.changeFoodNameHandler} value={this.state.newFoodsName} />
          <input type="text" name="newCaloriesAmount" id="" placeholder="Amount of calories" onChange={this.changeFoodCaloriesHandler} value={this.state.newCaloriesAmount} />
          <input type="file" ></input>
          <button type="submit" onClick={this.addNewFood}>Add new Food</button>
        </div>


        {this.state.foods.map((food) => {
          return (
            <div className="box" key={food.name}>
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={food.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{food.name}</strong> <br />
                      <small>{food.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="0" />
                    </div>
                    <div className="control">
                      <button className="button is-info">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )
        }
        )}


      </div>
    );
  }
}

export default App;
