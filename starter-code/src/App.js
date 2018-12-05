import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {Foodbox} from './Foodbox.js'
import Toggable from './components/Toggable/Toggable'
import CheckoutBillingForm from './components/CheckOutBillingForm/CheckOutBillingForm'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Toggable>
          <h1>Busca</h1>
          <CheckoutBillingForm submitHandler={this.submitHandler}></CheckoutBillingForm>
        </Toggable>
       
         <Foodbox/>
        


      </div>
    );
  }
}

export default App;