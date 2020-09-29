import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import 'bulma/css/bulma.css';
import './App.css';



class App extends Component {
  state = {
    foodList: []
  }
  
  addFood = (food) => {
    console.log({food});
    const newFoodList = this.state.foodList.concat(food);
    this.setState({
      foodList: newFoodList
    });
    console.log(">>>>", this.state);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        {/* <div>
          <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
        </div> */}
        <div className="columns">
          <div className="column">
            <h1 className="title">IronNutrition</h1>
              {foods.map(food => 
                <FoodBox onSubmit={this.addFood} key={food.name} item={food}/>
              )}
          </div>
          <div className="column content">
            {this.state.foodList.length !== 0 
              ? <FoodList list={this.state.foodList}/> 
              : null}            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
