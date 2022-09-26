import foods from './foods.json';
import React, { Component } from 'react'
import FoodList from './components/FoodList/FoodList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
 state = {
    foods: [...foods],
  }

  render() {
    return(
      <div>
        <FoodList foods={this.state.foods}/>
      </div>
    )
  }
}

export default App;