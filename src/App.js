import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './components/foodbox/Foodbox';
import foods from './foods.json';
import AddFood from './components/addfood/AddFood';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    foods: foods.map(food => ({
      ...food,
      id: uuidv4()
    })),
    showForm: false,
    search: ''
  }


  onAddItem = (food) => {
    this.setState({ foods: [
      ...this.state.foods,
      {
        ...food,
        id: uuidv4()
      }
    ] })
  }


  toggleShowForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }))
  }


  findFood = (search) => {
    this.setState({ search: search
    })
}



  render() {
    return (
      <div className="App">
        <h1><strong>Food list</strong></h1>

        <input
        onChange={this.findFood}
        type="text"
        placeholder="Search"
        >
        </input>

          <button onClick={this.toggleShowForm}>Add food</button>

            {
              this.state.showForm
                && (
                  <AddFood onAddFood={this.onAddItem} />
                )
            }

            {this.state.foods.map(food => (
            <Foodbox 
            key={food.id}
            name={food.name}
            calories={food.calories}
            image={food.image} />
          ))}
      </div>
    );
  } 
}

export default App;
