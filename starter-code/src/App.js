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
      showFoodForm: false,
      search: ""
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
    console.log(newState)
    this.setState({
      ...this.state,
      foods: newState.foods,
      showFoodForm: false
    })
  }

  search(e) {
    console.log(e)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
          <form>
            <input type="text" name="search" placeholder="search" value={this.state.search} onChange={e => this.search(e)}></input>
            
          </form>
          <button onClick={() => this.showFoodForm()}>New food</button>
        </header>
        {this.state.showFoodForm && (<Form sendStateFromApp={state => this.updateState(state)}></Form>)}

        {foods.map((value, idx) => <FoodBox key={idx} {...value} />)}
      </div>
    );
  }
}

export default App;
