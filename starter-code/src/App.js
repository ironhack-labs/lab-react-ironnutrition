import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodForm from './components/foodform/FoodForm';
import FoodBox from './components/foodbox/FoodBox';
import foods from './foods.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: foods,
      showForm: false,
      search: ""
    }
    this.buff = "";
  }
  showCreateNewFood = () => {
    console.log('Pasa por aquii')
    this.setState({ showForm: !this.state.showForm })
  }

  createNewFood = (food) => {
    let arr = [...this.state.food];
    arr.push(food);
    this.setState({
      ...this.state, food: arr
    })
  }

  searchInput = (event) => {
    console.log('Esta intentando buscar')
    // if (event.target.value === ""){
    //   this.buff.slice(0, -1);
    //   console.log(this.buff)
    // }
    // else
    this.buff += event.target.value;
    console.log(this.buff);
    let searchArray = foods.filter(word => 
      {
        if (word.name.toLowerCase().includes(this.buff))
          return word.name
      }
      )
    console.log(searchArray);
    this.setState({
      food: searchArray
  })
  }

  render() {
    return (

      <div className="App">
        <div class="control">
          <button onClick={this.showCreateNewFood} class="button is-primary">Add new food</button>
        </div>
        {this.state.showForm && <FoodForm createNewFood={this.createNewFood} />}

        <div class="field">
          <label class="label">Search</label>
          <div class="control">
            <input class="input" type="text" placeholder="Any food.."
              value={this.state.search} onK onChange={this.searchInput}></input>
          </div>
        </div>

        {this.state.food.map(piece => {
          return (
            <FoodBox {...piece} />
          )
        })}


      </div>
    );
  }
}

export default App;
