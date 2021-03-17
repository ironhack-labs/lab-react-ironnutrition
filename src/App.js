import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import foodsJson from './foods.json';
import Form from './components/Form';
import Search from './components/Search';
import Today from './components/Today';


class App extends React.Component {
  state = {
    foods: foodsJson,
    boolean: false,
    filter : "",
    meal : undefined,
    quantity: 0, 
    calories: 0
  };

  addMeal = (newMealFromChild) => {
    this.setState({ foods: [newMealFromChild, ...this.state.foods] });
  };

  getTheInput=(input)=>{
    console.log(input)
    this.setState({ filter: input });
}
  addQuantityOnMeal=(input)=>{
    this.setState({quantity :input.quantity, meal : input.meal, calories: input.calories})
  }

  HandleAdd = ()  => {
    this.setState({ boolean: true }, () => console.log(this.state.form));
  };


  render() {
    return (
      <div className="App">
      
        <Search getTheInput={this.getTheInput}/>
        {this.state.foods.filter(element=>element.name.toUpperCase().includes(this.state.filter.toUpperCase())===true)
        .map((meal, index) => (
          <div key={index}>
            <FoodBox food={meal} addQuantity={this.addQuantityOnMeal} />
          </div>
        ))}
        {this.state.boolean || (
          <button onClick={this.HandleAdd}>Add new Food</button>
        )}
        {this.state.boolean && <Form addMeal={this.addMeal} />}
        {/* {console.log(this.state.meal)} */}
        {<Today meal={this.state.meal} quantity={this.state.quantity} calories={this.state.calories*this.state.quantity}/>}

      </div>
    );
  }
}

export default App;
