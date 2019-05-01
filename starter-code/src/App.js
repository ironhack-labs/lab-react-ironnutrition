import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormFood from './FormFood';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foodInfo: foods
    }
  }

  addNewFood() {
    
  }

  render() {
    return (
      <React.Fragment>
        <FormFood></FormFood>
        {
          this.state.foodInfo.map((food, idx) => {
            return(
            <React.Fragment key={idx}>
              <FoodBox
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
              />
            </React.Fragment>
            )
          })
        }
      </React.Fragment>
    );
  }
}

export default App;
