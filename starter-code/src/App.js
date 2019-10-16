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
      showForm: false,
      value: '',
      foodFilter: foods
    };
    this.FoodForm = this.FoodForm.bind(this)
    this.addFood = this.addFood.bind(this)
    this.searchFood = this.searchFood.bind(this)
  }

  FoodForm() {
    this.setState({ showForm: !this.state.showForm })
    // console.log(this.state.showForm)
  }

  addFood(thefood)  {
    const foodCopy = [...this.state.foods];
    foodCopy.unshift(thefood);
    // console.log(foodCopy)
    this.setState({
      foods: foodCopy,
      showForm: !this.state.showForm
    })
  }

  searchFood(event) {
    const foodCopy = [...this.state.foodFilter];
    let { value } = event.target;
    console.log(value);
    
    let result = foodCopy.filter((e)=> {
      let low = e.name.toLowerCase()
      return low.includes(value)
    });
    this.setState({
      foods: result,
      value: value
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
            <input name='serch' value={this.state.value} className="input" type="text" placeholder="Find a repository" onChange={(e) => this.searchFood(e)}/>
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


