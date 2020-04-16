import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = {
    allfood: foods,
    form: true,
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form,
    })
  }

  updateFoods = (newFood) => {
    const updatedFoods = [...this.state.allfood];
    updatedFoods.push(newFood); 
    console.log(newFood);
    this.setState({
      allfood: updatedFoods,
    })
  }

  printAllFood = () => {
    const { allfood } = this.state;
    return allfood.map(item => <FoodBox key={item.name} name={item.name} calories={item.calories} image={item.image} />);
  }

  render() {
    const { form } = this.state;
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <button onClick={this.toggleForm} className="button is-normal is-danger">Add new food</button>
        { !form && <Form updateFoods={this.updateFoods} /> }
        { form && <div>{this.printAllFood()}</div> }
      </div>
    );
  }
}

export default App;
