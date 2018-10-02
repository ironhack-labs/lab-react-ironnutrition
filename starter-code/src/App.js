import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'


class App extends Component {
  render() {
    return (
      <div>
      
        {foods.map((e) => {
          return <FoodBox class="column content" key={e.name} {...e} />
        })}
        {/* <button onClick={()=> ()}>Add new food</button> */}
    </div>
    );    
  }
}

export default App;
