import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFood';
import Search from './Components/Search';
import TodaysFoodsBox from './Components/TodaysFoodsBox';

class App extends Component {
  state = {
    foods: foods,
     myFoods: []
  };

  addFoodToListHandler = (newFood) => {
    this.setState({
      foods: _.concat(this.state.foods, newFood),
    });
  };

  instantSearchHandler = (searchTerm) => {
    console.log(searchTerm);

    let filteredFoods = this.state.foods.filter((f) =>
      f.name.includes(searchTerm)
    );
    let unfilteredFoods = foods;
    let showFoods = '';

    if (searchTerm === '') {
      showFoods = unfilteredFoods;
    } else {
      showFoods = filteredFoods;
    }

    this.setState({
      foods: showFoods,
    });
  };

  foodToMyListHandler = (oneFood) => {

    this.setState({
      myFoods: _.concat(this.state.myFoods, oneFood),
    })
  }

  render() {
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <div className="title is-1 has-text-info">IRON NUTRITION</div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-narrow">
            <div className="subtitle is-4 has-text-info">
              Playing around with React and Bulma
            </div>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-6">
            <AddFood addFoodToListHandler={this.addFoodToListHandler}></AddFood>
          </div>
        </div>

        <Search instantSearchHandler={this.instantSearchHandler}></Search>

        <div className="columns is-centered">
          <div className="column is-narrow">
            {this.state.foods.map((f) => (
              <FoodBox
                name={f.name}
                image={f.image}
                calories={f.calories}
                quantity={f.quantity}
                key={Math.random()}
                foodToMyListHandler={this.foodToMyListHandler}
              ></FoodBox>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <div className="title is-3 has-text-primary">Todays Foods</div>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-narrow">
              <div className="list">
   
              {this.state.myFoods.map((f) => (
              <TodaysFoodsBox
                name={f.name}
                calories={f.calories}
                quantity={f.quantity}
                key={Math.random()}
              ></TodaysFoodsBox>
            ))}
            <div className="list-item has-text-danger">Total: </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
