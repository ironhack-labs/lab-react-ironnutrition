import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import SelectedFoodList from './components/SelectedFoodList';
import AddFood from './components/AddFood';

class App extends React.Component {
  state = {
    foods,
    showAddForm: false
  };

  clickAddFoodHandler = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div class="columns">
          <FoodList>
            {this.state.foods.map(food => {
              return <FoodBox key={food.name} {...food} />
            })}
          </FoodList>
          <div className="column content">
            <SelectedFoodList />
            <div>
              {!this.state.showAddForm && (
                <button onClick={this.clickAddFoodHandler} className="button is-info">
                  Add a new food
                </button>
              )}
              {this.state.showAddForm && <AddFood />}
            </div>         
          </div>
        </div>
      </div>
    )
  }
};


export default App;
