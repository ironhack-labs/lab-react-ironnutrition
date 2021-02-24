import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import React, { Component } from 'react';
import FoodBox from './components/foodBox/foodBox';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: foods,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(foodName) {
    // console.log('where  in toggleDisplay, food is:', foodName);
    let { data } = this.state;
    const foodsCopy = [...data];
    foodsCopy.forEach((oneFood) => {
      if (oneFood.name === foodName) {
        oneFood.isShown = oneFood.isShown ? false : true; //    !oneFood.isDone
      }
    });
    // console.log(foodsCopy[foodName]);
    this.setState({ data: foodsCopy });
  }

  updateQuantity(foodName, direction) {
    console.log('where  in quantity, food is:', foodName);
    let { data } = this.state;
    const foodsCopy = [...data];
    foodsCopy.forEach((oneFood) => {
      if (oneFood.name === foodName) {
        oneFood.quantity =
          direction === 'up'
            ? oneFood.quantity + 1
            : oneFood.quantity > 0
            ? oneFood.quantity - 1
            : 0;
      }
    });
    // console.log(foodsCopy[foodName]);
    this.setState({ data: foodsCopy });
  }

  render() {
    return (
      <div>
        {this.state.data.map((el) => {
          return (
            <FoodBox
              key={el.name}
              name={el.name}
              calories={el.calories}
              image={el.image}
              quantity={el.quantity}
              updateQuantity={this.updateQuantity}
              toggleDisplay={this.toggleDisplay}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
