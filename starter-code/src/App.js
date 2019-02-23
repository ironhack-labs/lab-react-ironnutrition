import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFood: foods,
      buttonclicked: false
    };

  }

  render() {
    return (
      <div className="App">
       <Ironfoods allFood = {this.state.allFood} />
      </div>
    );
  }
}

class Ironfoods extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allFood: this.props.allFood,
      currentFood: [],
      buttonclicked: false
    };

  }

  handleBtnClick() {
    this.setState( {
      buttonclicked: !this.state.buttonclicked
    });
  }

  addFood = (e) => {
    e.preventDefault();
    const food = {
      "name": e.target.name.value,
      "calories": e.target.calories.value,
      "image": e.target.image.value,
      "quantity": e.target.quantity.value,
    }

		console.log('TCL: App -> addFood -> this.state.allFood', this.state.allFood)
    console.log('TCL: App -> addFood -> food', food)
    const allFoodCopy = this.state.allFood;
    allFoodCopy.push(food)
		console.log('TCL: App -> addFood -> allFoodCopy', allFoodCopy)
		// console.log('TCL: App -> addFood -> allFoodCopy', allFoodCopy[allFoodCopy.length-2])
		// console.log('TCL: App -> addFood -> allFoodCopy', allFoodCopy[allFoodCopy.length-1])
    this.setState({
      allFood: allFoodCopy,
      buttonclicked: !this.state.buttonclicked
    });
  }

  render() {
    return (
      <div className="Ironfoods">
      {!this.state.buttonclicked && <button onClick={this.handleBtnClick.bind(this)}>Add new Food</button>}
      {this.state.buttonclicked && <AddFoodForm addFood={this.addFood} allFood={this.props.allFood}/>}
        <div className="columns">
          <div className="column">
            {this.state.allFood.map((food, i) => <FoodBox key={i} food={food}/>)}
          </div>
          <div className="column">
            Todays Food
            <div className="list is-hoverable">
              {this.state.currentFood.map((food, i) => <a key={i} className="list-item">{this.state.currentFood.name}</a>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class AddFoodForm extends Component {

  render() {
    return (
      <div className="addFoodForm">
        <form onSubmit={(e) => this.props.addFood(e)}>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Food"/>
          <label>Calories:</label>
          <input type="text" name="calories" placeholder="calories"/>      
          <label>Quantity:</label>
          <input type="text" name="quantity" placeholder="Quantity"/>              
          <label>Image:</label>
          <input type="text" name="image" placeholder="Image"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

class FoodBox extends Component {

  handleChange() {

  }

  render() {
    return (
      <div className="FoodBox">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} alt="food"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    onChange={this.handleChange}
                    className="input"
                    type="number" 
                    value="1"
                  />
                </div>
                <div className="control">
                  <button onClick={e => this.addFood(e)} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
