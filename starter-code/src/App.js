import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import OFoods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import MyForm from './components/MyForm/MyForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods : [...OFoods],
      formDispay: false
    }
  }

  addFood = (newFood)=>{
    let newFoods = [...this.state.foods]
    newFoods.push(newFood)
    this.setState({...this.state,foods:newFoods})
    this.changeButton();
  }

  changeButton = ()=>{
    let display = null;
    if(this.state.formDispay){
      display=false;
    }else{
      display=true
    }
    this.setState({formDispay:display})
  }
  render() {
    
    return (
      <div className="App">
        <div className="BoxContainer">
          {this.state.foods.map((food, index) => {
            return <FoodBox key={index} data={food} />;
          })}
        </div>
        <div className="ExtraContainer">
          <div className="SearchContainer">

          </div>
          <div className="FormContainer">
            {this.state.formDispay ? (<MyForm info={this.addFood} />) : ( <button onClick={() => {this.changeButton();}}>DISPLAY</button>)}
          </div>
          <div className="ListContainer">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
