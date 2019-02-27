import React, { Component } from 'react';

import './App.css';
import FormBox from './components/FormBox';
import foods from './foods.json'
import NewFood from './components/NewFood';

class App extends Component {
  state={
    plates: foods
  }
  

  render() {
    console.log()
    return (
      <div>
        <NewFood addFood={this.addFoodHandler}/>
        
        {this.state.plates.map((el,index)=> <FormBox key={index} {...el} />)}
      </div>
    );
  }
}

export default App;
