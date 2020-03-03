import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
class App extends Component {
  render() {
 

    return (
      <div className="App">
        <div className="columns">
          <div className="column is-12">
          {foods.map( (food, id) =>{
         return( <FoodBox key= {id} data ={food} />)
        })}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
