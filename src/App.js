import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import './App.css';
import FoodBoxContainer from './component/foodBoxContainer';
import FoodForm from './component/foodForm';
import foods from './foods.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foods,
      formOpen: false
    };
  }

  showFoodForm() {
    this.setState({ formOpen: true })
  };

  addFood(food) {
    const newFoods = [...this.state.foods, food];
    this.setState({ foods: newFoods, formOpen: false });
  }

  render() {
    const formOpen = this.state.formOpen;
    const foods = this.state.foods
    return (
      <div className="App">
        <div className='body'>
          <div className='btn-div'>
            {
              formOpen ?
                <FoodForm addFood={(food) => this.addFood(food)} /> :
                <button onClick={() => this.showFoodForm()}>Add food</button>
            }
          </div>
          <FoodBoxContainer foods={foods} />
        </div>
      </div>
    );
  }
}

export default App;