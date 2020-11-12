import React, { Component } from 'react'
import './App.css';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FormAdd from './FormAdd';


class App extends Component {

  state = {
    foods: foods.slice(0,7)
  }

  
  
  
  render() {
    
    return (
      <div>
        <h1>FOODS</h1>
        <FormAdd />
        {this.state.foods.map((element, index) => {
          return (
           
            <FoodBox
              img={element.image}
              name={element.name}
              calories={element.calories}
              quantify={element.quantify}
            />
         
          )
        })}

      </div>
    )
  }
}

export default App;
