import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import CreateFood from './components/CreateFood';
import Search from './components/Search';

class App extends Component {
  state= {
    displayForm: false,
    foods: foods,
    filtered: foods,
  }

  handleClick = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  };

  pushFoodHandler = (food) => {
    const foods = [...this.state.foods];
    foods.unshift(food);
    this.setState({ foods: foods, filtered: foods, displayForm: false});
  };

  filterFoodHandler = (input) => {
    const filtered = this.state.foods.filter(el => {
      return el.name.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({ filtered: filtered });
  };
  
  render () {
    const {displayForm, foods, filtered } = this.state;  
    const buttonText = this.state.displayForm ? "Click to hide" : "Click to show";
  
    return (
      // 
      //   <div className="todays-food">
      //       <h2>Today's Food</h2>
      //       <p>{this.state.today}</p>
      //   </div>
      //   </div>
      // </div>
            <div className="App">
            <div className="container">
              <h1 className="Title">IronNutrition</h1>
                <div>
                  <Search filteredFood={this.filterFoodHandler} />
                  <button className="button" onClick={this.handleClick}>
                    {buttonText}
                  </button>
                  <div>
                    {displayForm && <CreateFood pushFood={this.pushFoodHandler} />}
                    <div>
                      {filtered.map((oneFood, i) => {
                        return <FoodBox key={i} food={oneFood} />
                      })}
                    </div>
                </div>
              </div>
            </div>
          </div>
    );
}
}

export default App;
