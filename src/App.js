import foods from './foods.json';
import React, { Component } from 'react'
import FoodList from './components/FoodList/FoodList';

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