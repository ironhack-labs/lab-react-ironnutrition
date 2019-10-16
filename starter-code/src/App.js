import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import './App.css'
import 'bulma/css/bulma.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        allFoods: foods,
        visible: false,
    }
  }

  toggleFoods = () => {
    this.setState({ visible: !this.state.visible });
}

  showFoods() {
    console.log(this.state)
    return this.state.allFoods.map((food, index) => {
      console.log(foods)
      return <FoodBox key={index} {...food} />
    })
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.allFoods];
    foodsCopy.push(theFood);
    this.setState({
      allFoods: foodsCopy,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <button onClick={() => this.toggleFoods()}>AddFood
        </button>
        {this.state.visible ? <AddFood addTheFood={this.addFoodHandler.bind(this)}/> : null}    

        
        <div className="foods-list">
        {this.showFoods()}
        </div>
      </div>
    );
  }
}

export default App;
