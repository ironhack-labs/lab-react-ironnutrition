import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {
  state = {
    allFoods: foods,
  };
  render() {
    return (
      <div className="App">
        {this.state.allFoods.map((eachFood) => {
          return <FoodBox {...eachFood} />;
        })}
      </div>
    );
  }
}

export default App;
