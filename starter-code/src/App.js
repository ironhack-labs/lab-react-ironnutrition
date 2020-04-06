import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {

  constructor() {
    super();
    this.state = {
      foods: foods
    };

    this.filterFoods = this.filterFoods.bind(this);
  }


  filterFoods = (e) => {
    let filterTheFood = this.state.foods.filter(food=>{

      return food.name.toLowerCase().includes(e.target.value.toLowerCase())

    })
    
    this.setState({
      foods:filterTheFood
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Search
          filterFoods={() => this.filterFoods()}
          />
        </div>
        <div>
          {this.state.foods.map((food) =>
            <FoodBox
              imageURL={food.image}
              food={food.name}
              calories={food.calories}
            />)
          }
        </div> 
      </div>
    );
  }
}

export default App;
