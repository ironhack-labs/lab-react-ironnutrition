import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox.js';
import AddFood from './components/AddFood.js';
import Resume from './components/Resume.js';
import foods from './foods.json';

class App extends Component {

  state = {
    foods: foods,
    open: false
  }

  addFood(e, newFood) {
    e.preventDefault();
    let newState = {
      ...this.state
    };
    newState.foods.unshift(newFood);
    newState.open = false;
    this.setState(newState);
  }

  clickToOpen() {
    this.setState({ open: true });
  }

  searchFood(e) {
    let newList = [];
    if (e.target.value !== "") {
      const filteredFood = [...this.state.foods];

      newList = filteredFood.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();

        return lc.includes(filter);
      });
    } else {
      newList = this.state.foods;
    }

    this.setState({
      foods: newList
    });
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={e => this.searchFood(e)}
          className="input"
          type="text"
          placeholder="Text input"
        />
        <button className="button is-link" onClick={() => this.clickToOpen()}>Add New</button>
        {this.state.open && (
          <AddFood
            clickToSubmit={(e, newFood) => this.addFood(e, newFood)}
          ></AddFood>
        )}
        <div className="columns">
          <div>
            {this.state.foods.map((item, index) => (
              <FoodBox
                key={index}
                name={item.name}
                calories={item.calories}
                image={item.image}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="column">
            <Resume />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
