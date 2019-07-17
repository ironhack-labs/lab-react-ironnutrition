import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './Component/FoodBox/FoodBox';
import FormularioContainer from './Component/Formulario/FormularioContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allFood: [...foods]
    }

  }

  addNewFood() {



  }



  render() {
    return (
      <div className="App">

        <FormularioContainer></FormularioContainer>
        {console.log(this.state.allFood)}
        {
          this.state.allFood.map((food, idx) => {
            return <FoodBox url={food.image} name={food.name} calorias={food.calories} key={idx}
            ></FoodBox>
          })
        }

      </div>
    );
  }
}

export default App;
