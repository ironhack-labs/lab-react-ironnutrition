import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FunctionButton from './components/FunctionButton';
import Formadd from './components/Formadd';

class App extends Component {
  state = {
    foods,
    showForm:false,

  }


  ChangeState = () => {
    let newState ={
           ...this.state,showForm: !this.state.showForm
       }

         this.setState(newState)

  }
  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(food)
    this.setState(
      {foods: foodsCopy }
    )
  }

      
  

  
  render() {
    // let CondicionForm = undefined
    // if (this.state.showForm){
    //   CondicionForm = <Formadd/>
    // }else{
    //   CondicionForm = undefined;
    // }

    // const CondicionForm = this.state.showForm ? <Formadd/> :undefined
     
    return (
      <div className="App">
       <FunctionButton functionProp={this.ChangeState}>Form</FunctionButton>
        {this.state.showForm ? <Formadd addFoodHa={this.addFoodHandler}/> :undefined}
        <FoodBox comidasArr={this.state.foods}/>
        
    
       
      </div>
    );
  }
}

export default App;

