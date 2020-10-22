import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Form from './components/form/Form';

export default class App extends Component {
  state = {
    foods: foods,
    name: '', 
    calories: '',
    image: '', 
    showForm: false
  };

  showForm = (e) => {
    console.log(e);
    this.setState({
      showForm: true
    })
  };

  addData = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  submitForm = (e) => {
    e.preventDefault()
    let newFood = {
      name: this.state.name, 
      image: this.state.image, 
      calories: this.state.calories
    }
    this.setState({
    //  foods: [...foods, newFood]
      foods: this.state.foods.concat([newFood]), 
      showForm: false
    })

    
    console.log(this.state.name);
    console.log(this.state.image);
    console.log(this.state.calories);
    console.log(this.state.foods)
  };

  render() {
    return (
      <div className="App">
        {this.state.foods.map((item) => (
          <FoodBox key={item.name} item={item} />
        ))}
        <button onClick={this.showForm}>Show a form</button>
        {this.state.showForm ? 
          <div>
          <form onSubmit={this.submitForm}>
            <label htmlFor="name">Food name</label>
            <input type="text" name="name" value={this.state.name}
             onChange={this.addData} />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" value={this.state.image}
            onChange={this.addData} />
            <label htmlFor="cal">Calories</label>
            <input type="text" name="calories" value={this.state.calories}
            onChange={this.addData} />
            <button type="submit">Add new food</button>
          </form>
        </div> : null
        }
      </div>
    );
  }
}

/* name={item.name}
              calories={item.calories}
              image={item.image}
              quantity={item.quantity} */
