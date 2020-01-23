import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Form from './components/Form'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { foods };


  }

  onAddItem(item) {
    const allFoods = this.state.foods.map((food) => {
      if (item === food) {
        return { ...item, quantity: food.quantity + 1 };
      }

      return food;
    });

    this.setState({ foods: allFoods })
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          {this.state.foods.map((item) => <FoodBox image={item.image} name={item.name} calories={item.calories} quantity={item.quantity} onAddItem={() => this.onAddItem(item)} />)}
        </div>
        <div className="column">
          <Form addFoods={this.state.foods}/>
        </div>
      </div>

    );
  }
}

export default App;
