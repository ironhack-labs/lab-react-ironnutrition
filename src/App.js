import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {
  state = {
    foods: foods,
    displayedFoods: [...foods]
  }

  render() {
    const foodList = this.state.displayedFoods.map((element) => {
      return <FoodBox key={element.name} food={element} />
    })

    return (
      <div className="App">
        {foodList}
      </div>
    )
  }
}

export default App;
