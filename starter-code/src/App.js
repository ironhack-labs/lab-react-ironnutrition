import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import FoodBox from './components/foodbox/FoodBox';
import FoodForm from './components/foodForm/FoodForm.jsx';
import FoodMenu from './components/foodMenu/FoodMenu.jsx';

class App extends Component {
  state = {
    foods2 : [...foods],
    foods : [...foods],
    search : undefined
  }

  addNewFood(newFoodDetails) {
    var foodsIncludingNewFood = [...this.state.foods2]
    foodsIncludingNewFood.push(newFoodDetails)
    this.setState({
      ...this.state,
      foods2:foodsIncludingNewFood,
      foods:foodsIncludingNewFood
    })
  }

  searchFunction(e) {
    let foods = [...this.state.foods2];
    let foodsFilter = foods.filter((food) => food.name.toUpperCase().includes(e.target.value.toUpperCase()));
    this.setState({
      ...this.state,
      foods:foodsFilter
    })
  }

  render() {
    const foodDisplay = 
      this.state.foods.map((food,i) => {
        return (
          <React.Fragment key={i}>
            <FoodBox {...food} />
          </React.Fragment>
        )
      });
    
    return (
      <React.Fragment>
        <header>
          <form className="formSearch">
             <input 
              placeholder="Search" 
              type="text" 
              value={this.state.search} 
              onChange={(e) => this.searchFunction(e)} >
            </input> 
          </form>
        </header>
        <section className="sectionApp">
          <div>
            <div className="foodDisplay">{foodDisplay}</div> 
          </div>
          <div className="formDisplay">
            <FoodForm  newFood={(newFood) => this.addNewFood(newFood)} />
            <div>
              <h2>Today's Foods</h2>
              <ul>
                <FoodMenu />
              </ul>
              <p>Total calories: </p>
            </div>
          </div>
        </section>  
      </React.Fragment>
    );
  }
}

export default App;
