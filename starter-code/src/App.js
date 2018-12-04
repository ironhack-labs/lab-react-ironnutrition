import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodForm from './components/foodform/FoodForm';
import FoodBox from './components/foodbox/FoodBox';
import foods from './foods.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: foods,
      showForm: false
    }
  }
  showCreateNewFood = () => {
    console.log('Pasa por aquii')
    this.setState({ showForm: !this.state.showForm })
  }

  createNewFood = (food) => {
    let arr = [...this.state.food];
    arr.push(food);
    this.setState({
      ...this.state, food: arr
    })
  }

  render() {
    return (

      <div className="App">
        <div class="control">
          <button onClick={this.showCreateNewFood} class="button is-primary">Add new food</button>
        </div>
        {this.state.showForm && <FoodForm createNewFood={this.createNewFood} />}

        {this.state.food.map(piece => {
          return (
            <FoodBox {...piece} />
          )
        })}


      </div>
    );
  }
}

export default App;
