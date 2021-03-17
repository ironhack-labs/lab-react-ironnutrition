import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './component/FoodBox';

class App extends Component {
  state ={
    
  }
  render () {
    return(
    <div className="App">
{foods.map(food => <FoodBox food={food}/>)  }
    </div>
  )
}
}
export default App;
