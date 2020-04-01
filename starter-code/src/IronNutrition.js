import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Formulario from "./components/formulario"
import List from "./components/List"


class IronNutrition extends Component {
  constructor() {
    super()
    this.state = {
      food: foods,
      formStatus: false,
      lista:[]
    }
  }

  addFoodHandler = (newFood) => {
    const foodCopy = [...this.state.food]
    foodCopy.push(newFood)
    this.setState({
      food: foodCopy,
    })
  }
  ChangeStatus = () => {
    this.setState({
      formStatus: !this.state.formStatus
    })
  }
  Search = (e) => {

    this.setState({ food: [...foods].filter((a) => a.name.toLowerCase().includes(e.target.value.toLowerCase())) })
  }

  AddList = (inputValue) => {
    console.log(inputValue)
    let copyArrayLista = [...this.state.lista]
    let exist = false
    for (let i = 0; i < copyArrayLista.length; i++) {
      if (copyArrayLista[i].name === inputValue.name) {
        exist = true
        if (inputValue.quantity >= 1) {
          copyArrayLista[i].quantity += inputValue.quantity
        }

      }
    }
    if (!exist && inputValue.quantity >= 1) {

      copyArrayLista.push(inputValue)

    }
    console.log(copyArrayLista)
    this.setState({
      lista: copyArrayLista
    })


  }
  removeList = (i) => {
    let array = [...this.state.lista]
    let newArray = array.splice(0, 1)
    console.log(newArray)
    this.setState({
      lista: newArray
    })
  }

  render() {
    return (
      <div className="IronNutrition">
        <input type="text" name="search" placeholder="Search..." onChange={this.Search}></input>
        <List value={this.state.lista}></List>

        {this.state.formStatus ? (
          <div>
            <button onClick={this.ChangeStatus}>hide</button>
            <Formulario newFood={this.addFoodHandler} />
          </div>
        ) : (
            <div>
              <button onClick={this.ChangeStatus}>show</button>
            </div>
          )}

        <button onClick={this.addFood} >Add new foods</button>
        {this.state.food.map((a, i) => <FoodBox add={this.AddList} delete={this.removeList} data={a} key={i} />)}
      </div>
    );
  }
}

export default IronNutrition;
