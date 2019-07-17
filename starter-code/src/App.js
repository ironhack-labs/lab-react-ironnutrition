import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './Component/FoodBox/FoodBox';
import FormularioContainer from './Component/Formulario/FormularioContainer';
import Input from './Component/Input/Input';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allFood: [...foods],
      form: false
    }

  }

  addNewFood(newFood) {
    let newState = { ...this.state };
    newState.allFood.push({
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image
    })
    this.setState(newState)
  }

  showForm() {
    let isForm = this.state.form
    let isActive = !isForm
    let newState = {
      ...this.state,
      form: isActive
    }
    this.setState(newState)

  }

  searchBar(e) {
    let value = e.target.value.toUpperCase()
    let newState = { ...this.state }
    let newFood = newState.allFood.filter((food) => food.name.toUpperCase().includes(value))
    this.setState({
      ...this.state,
      allFood: newFood
    },
      () => {
        this.state.allFood = [...newState.allFood]
      }
    )
  }


  render() {
    return (
      <div className="App">

        <input className="input"
          type="search"
          onChange={(e) => this.searchBar(e)}
        ></input >

        <button onClick={() => this.showForm()}>Add new food</button>
        {this.state.form && <FormularioContainer rafa={(food) => this.addNewFood(food)} />}

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
