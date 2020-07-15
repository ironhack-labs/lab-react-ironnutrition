import React,{ Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: foods,
      newFood: false
    };
  }

  insertFood = newFood => {
    
  }
  
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        {this.state.food.map(props => {
          return <FoodBox
            name={props.name}
            image={props.image}
            calories={props.calories}
            quantity={props.quantity}
          />;
        })}
      </div>
    );
  }
}

export default App;
