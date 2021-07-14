import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import foodsJSON from './foods.json';
import AddFood from './AddFood';
import Search from './Search';

class App extends React.Component {
  state = {
    foods: foodsJSON,
    filteredFoods: foodsJSON,
  }


  handleFilterFood = (query) => {
    this.setState((previousState) => {
      return {
        filteredFoods: previousState.foods.filter((food) => {
          return food.name.toLowerCase().includes(query.toLowerCase());
        }),
      };
    })
  }
   



  addFoodHandler = (newFood) => {
    // ALWAYS USE SETSTATE TO BE RERENDERED
    this.setState((previousState) => {
      return {
        foods: previousState.foods.concat(newFood),
      }
    })
  }



  render() {
    const { filteredFoods } = this.state;

    return (
      <>
        <Search filterFood={this.handleFilterFood} />
        {filteredFoods.map((food) => {
          return (
            <>
              <div>
                <FoodBox  {...food} />
              </div>



            </>
          )
        })}
        <AddFood addTheFood={this.addFoodHandler} />
      </>
    )


  }
}

export default App;
