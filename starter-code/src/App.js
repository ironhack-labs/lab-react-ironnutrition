import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FoodBoxDisplayer from './components/FoodBoxDisplayer';
import FormFood from './components/FormFood';
import SearchFood from './components/SearchFood';


class App extends Component {
  
  constructor(){
    super()
    this.state = {
      foodBoxs : [...foods],
      activeForm: false
  }

}

addNewFood(newFood) {
  let newState = {...this.state};
  
  newState.foodBoxs.push({
    name: newFood.name,
    image: newFood.image,
    calories: newFood.calories
  })

  this.setState(newState)
}

activeForm(){
  let newState = {...this.state};
  newState.activeForm = !newState.activeForm;
  this.setState(newState)
}

filterFood(foodStr){
  let newState = [...foods]
  newState = newState.filter((el)=> {
    return el.name.indexOf(foodStr) != -1;
  }
  )
  this.setState({...this.state,foodBoxs: newState})
}

// lo mismo pero con filter que addNewFood

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Iron Nutrition</h1>
        </header>
        <SearchFood searchFoodFn={(food)=>this.filterFood(food)}></SearchFood>
        <section>
          <FormFood 
          className={this.state.activeForm ? "showForm" : "hideForm"}
          addNewFoodHandler={(food) => this.addNewFood(food)} />
        </section>
        <FoodBoxDisplayer foodBoxs={this.state.foodBoxs}></FoodBoxDisplayer>
      </div>
    );
  }
}

export default App;
