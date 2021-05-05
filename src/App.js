import React from 'react';
import foodList from './foods.json';
import Foodbox from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';


class App extends React.Component {
  state = {
    foods: foodList 
  }

  displayFoods = () => {
    return this.state.foods.map((singleFood) => {

      return (
        
          <Foodbox {...singleFood}/>
        
      )

    })
  }

  render() {
    return (
      <div>
      {
      this.displayFoods()
      }
      </div>
    )
  }
}

export default App;
