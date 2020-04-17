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
        
        { form && <div className="button-home"><button onClick={this.toggleForm} className="button is-normal is-info">Add new food</button>
        <input className="input input-search" type="text" placeholder="Search"></input></div> }
        { !form && <Form updateFoods={this.updateFoods} toggle={this.toggleForm}/> }
        { form && 
        <div class="columns">
          <div class="column">
            {this.printAllFood()}
          </div>
          <div class="column gray-column">
            Hola
          </div>
        </div> }
      </div>
    );
  }
}

export default App;
