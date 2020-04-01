import React, { Component } from 'react';
import foods from './foods.json'
import './App.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foodsArr: foods, 
    showForm: false
  }
  
  addForm = () => {
    this.setState ({showForm : !this.state.showForm})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ironnutrition</h1>
        </header>
        <button onClick={this.addForm}>{this.state.showForm ? "Hide form" : "Add food"}</button>
        {this.state.showForm ? <FoodForm/> : null} 
        {this.state.foodsArr.map((e, i) => {
        return <FoodBox key={i}
        name={e.name} 
        calories={e.calories} 
        image={e.image} 
        quantity={e.quantity}/>
        })
        }
      </div>
    );
  }
}

export default App;
