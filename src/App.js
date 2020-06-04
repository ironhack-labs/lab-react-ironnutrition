import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFood';

class App extends Component {
  
  
  state = {
    someFoods: _.slice(foods, 0, 5),
  };

  addFoodToListHandler = (newFood) => {

    this.setState({
      someFoods: _.concat(this.state.someFoods, newFood)
    })
  }

  render() {
    return (
      <div className="section">

            <h1 className="title is-1">RANDOM FOOD STUFF</h1>
            <div className="columns">
            <AddFood addFoodToListHandler={this.addFoodToListHandler}></AddFood>
          </div>

        <div className="columns is-centered">
          <div className="column is-6">
            {this.state.someFoods.map((f) => (
              <FoodBox
                name={f.name}
                image={f.image}
                calories={f.calories}
                quantity={f.quantity}
              ></FoodBox>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
