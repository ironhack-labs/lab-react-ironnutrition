import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodform from './components/FoodForm'

class App extends Component {
  constructor(){
    super();
    this.state={
      food: foods,
      form: false,
      
    }
  }

  showForm=()=>{
    this.setState({form: !this.state.form})
    console.log(this.state.form)
  }

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.food];
    foodCopy.push(theFood);
    this.setState({
      food: foodCopy,
      form: !this.state.form
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* Button damit das showForm handler aufgerufen wird  */}
        <button onClick={this.showForm}>Add Food</button>

        {/* Wenn sich der Status form ändert, dann wird das Formular angezeigt oder nicht */}
        {this.state.form ? <Foodform addFood={this.addFoodHandler}/>: <p></p>}

        {/* Hier werden die einzelnen Elemente aus dem foods Array an FoodBox übergeben */}
       {this.state.food.map((oneFood,index)=>{
         return (<FoodBox key={index} {...oneFood} />)
       })
         
         
         }
        
      </div>
    );
  }
}

export default App;
