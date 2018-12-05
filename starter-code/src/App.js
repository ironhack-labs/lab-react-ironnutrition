import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox/FoodBox.js'
import foods from './foods.json'
import Toggable from './components/Toggable/Toggable'
import CheckoutBillingForm from './components/CheckOutBillingForm/CheckOutBillingForm'


class App extends Component {

  constructor (){
    super()
    this.state = {
      foods: foods
    }

  }


  render() {
    return (
        
        <div className="App">
    
    <FoodBox></FoodBox>
    {this.state.foods.map((food, index) => (<FoodBox key={index}  {...food}/>))}  
 
    <Toggable>
          <h1>This is my form</h1>
          <CheckoutBillingForm submitHandler={this.submitHandler}></CheckoutBillingForm>
        </Toggable>

    
      </div>
      
    );
  }
}

export default App;
