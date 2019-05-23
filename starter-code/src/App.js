import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {
	render() {
    return (
      <div className="App">
        {foods.map((e, i) => (
					<FoodBox key={i} food={e}/>	
				))}
      </div>
    );
  }
}

export default App;
