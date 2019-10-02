import React, { Component } from 'react';
import FoodBox from './FoodBox';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import Form from './Form';

class App extends Component {

  constructor() {
    super()
    this.state = {
      foods: foods,
      showFoodForm: false
    }
  }
  showFoodForm() {
    this.setState({
      ...this.state,
      showFoodForm: !this.state.showFoodForm
    })
  }
  updateState(newFood) {
    let newState = { ...this.state };
    newState.foods.push(newFood)
    this.setState({
      ...this.state,
      foods: newState.foods,
      showFoodForm: false
    })
  }

  search(e) {

    let newState = { ...this.state };

    // RegExp test in input form: in: 'po' - out: {Pot Roast,Sweet Potato}
    let newRegEx = new RegExp(`^${e.target.value}|\\s${e.target.value}`, 'i');

    let newFoods = newState.foods.filter(food => newRegEx.test(food.name))

    this.setState({
      ...this.state,
      foods: newFoods
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
          <form>
            <input type="text" name="search" placeholder="search"  onChange={e => this.search(e)}></input>
            
          </form>
          <button onClick={() => this.showFoodForm()}>New food</button>
        </header>
        {this.state.showFoodForm && (<Form sendStateFromApp={state => this.updateState(state)}></Form>)}

        {this.state.foods.map((value, idx) => <FoodBox key={idx} {...value} />)}
      </div>
    );
  }
}

export default App;
