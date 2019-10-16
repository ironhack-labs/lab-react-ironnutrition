import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormNewFood from './FormNewFood';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false
    };
    this.FoodForm = this.FoodForm.bind(this)
    this.addFood = this.addFood.bind(this)
  }

  FoodForm() {
    this.setState({ showForm: !this.state.showForm })
    // console.log(this.state.showForm)
  }

  addFood = (thefood) => {
    const foodCopy = [...this.state.foods];
    foodCopy.unshift(thefood);
    // console.log(foodCopy)
    this.setState({
      foods: foodCopy,
      showForm: !this.state.showForm
    })
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <button onClick={this.FoodForm}>
          SHOW FORM
        </button>
        <div>
          {showForm && <FormNewFood addTheFood={this.addFood} />}
        </div>
        <div className="field has-addons">
          <div className="control">
            <input name='serch' className="input" type="text" placeholder="Find a repository" />
          </div>
          <div className="control">
            <a className="button is-info">
              Search
            </a>
          </div>
        </div>
        {this.state.foods.map((elem, idx) => {
          return <FoodBox key={idx} name={elem.name} calories={elem.calories} image={elem.image} quantity={elem.quantity} />
        })}

      </div>
    );
  }
}

export default App;


