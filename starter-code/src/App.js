import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Foodbox  from "./Foodbox.js";
import NewFood from './NewFood.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allFoods: foods,
      displayForm: false,
      perDay: [],
      dailyCalories: 0,
      displayedFoods: []
    }
  }

  formAddingFood = () => {
    this.setState({ displayForm: !this.state.displayForm}) //he visto que esta es la forma de llamarlo, pero no tengo claro qué hace para funcionar, ¿qué valor le está asignando a displayForm?
  }

  handleAddFood = food => {
    const newfoods = [...this.state.allFoods] //he leído que es mejor crear una copia del estado para así modificarlo, pero no tengo claro por qué, qué pasa si no se hace con una copia, modificaría el estado original, que es mi objetivo, ¿no?
    newfoods.unshift(food);
    this.setState({ //he tenido que buscar ayuda para conseguir esta modificación del state, y no entiendo por qué funciona así
      allFoods: this.state.allFoods,
      displayForm: !this.state.displayForm
  })
}
  searchFood = searched => {
    let { allFoods } = this.state;
    let filtered = allFoods.filter(e => e.name.toLowerCase().includes(searched));
    this.setState({ displayedFoods: filtered });
  };

  totalPerDay = day => {
    const onDay = [...this.state.perDay]
    onDay.push(day);
    this.setState({perDay: this.state.perDay, dailyCalories: this.state.dailyCalories + day.calories})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ironnutrition</h1>
        </header>

        <div> {!this.state.displayForm && 
          <button onClick={this.formAddingFood}>Add new food</button>}
        </div>

        <label>Search</label>
        <input type='text' onChange={searched => this.searchFood(searched.target.value.toLowerCase())}/>
        {this.state.displayForm && <NewFood newfoods={food => this.handleAddFood(food)}/>} 

       <div> {this.state.allFoods.map((e, i) => {
          return (
            <Foodbox
              key={e.name}
              name={e.name}
              calories={e.calories}
              image={e.image}
              totalPerDay={day => this.totalPerDay(day)}/>)
        })}
        </div>
      </div>
    );
  }
}

export default App;
