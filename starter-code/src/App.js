import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormFood from './FormFood';

class App extends Component {
constructor(){
  super();
  this.state={
    foodCopy : [...foods],
    form : false,
  }
}

confirmFood(newFood){
  let newState = {...this.state};
  newState.foodCopy.push(newFood);
  newState.form = false;
  this.setState(newState);
}

activateForm(){
  let isVisible = this.state.form;
  let isVisibleModified = !isVisible;
  this.setState({...this.state,
  form:isVisibleModified});
}

searchFood(e){
  e = e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1,e.length);
  let newState = {...this.state};
  let findFood = newState.foodCopy.filter(ele => ele.name.indexOf(e)
   === 0);
  this.setState({
    ...this.state,
    foodCopy : findFood
  }
  , 
  () => {
    this.state.foodCopy = [...newState.foodCopy]
  }
  );
}

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <button onClick={() => this.activateForm()}>Add new food</button>
        {this.state.form && <FormFood confirmFoodHandler={(food) => this.confirmFood(food)}></FormFood>}
        <div>
          <input className="search" onChange={(e) => this.searchFood(e)}></input>
        </div>
        {this.state.foodCopy.map((fo, ind) =>
          <FoodBox  name={fo.name} calories={fo.calories} image={fo.image} quantity={fo.quantity} key={ind}></FoodBox>
        )
      }
      </div>
    );
  }
}

export default App;
