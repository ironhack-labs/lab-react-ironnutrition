import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodBox/FoodBox.js';
import FoodForm from './components/form/FoodForm.js';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {formVisible: false}
  }

  handleFormVisibility = () => {
    this.setState({formVisible: true})
  }

  handleNewFood = (newFood) => {
    if(
      newFood.name === ''
    ) {
      alert("Error")
      return
    }
    foods.push(newFood)
    this.setState({formVisible: false})
  }

  render() {
    return (
      <div className="App container">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-half">
            <button className="button" onClick={this.handleFormVisibility}>Add new food</button>
            {this.state.formVisible && <FoodForm addFood={this.handleNewFood} />}
            <ul>
              {foods.map(food => (
                <li className="food-item" key={food.name}>
                  <FoodBox food={food} />
                </li>
              ))}
            </ul>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default App;
