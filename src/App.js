import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/Foobox/FoodBox'
import AddFoodForm from './components/AddFoodForm/AddFoodForm'
import SearchBar from './components/Searchbar/SearchBar'

export default class App extends Component {
  state = {
    foodList: foods,
    //IT4.1: creo un array nuevo.
    filteredFood: foods
  }

  //Creo la función que recibe una comida, hace una copia del
  //estado de foods y lo agrega al foodList
  addFood = (food) => {
    const newFoodList = [...this.state.filteredFood, food];
    const filteredFoodCopy = [...this.state.filteredFood, food]
    this.setState({
      foodList: newFoodList,
      filteredFood: filteredFoodCopy
    }) 
  };

  /**IT4.2: creo una función que recibe un input como argumento.
   * Creo una copia de foodList para que GUARDE los elementos que coincidan con 
   * el input y lo guardo en una variable. Guardo esa variable dentro de la lista de filtrados**/
  filterFood = input => {
    const newFilteredFood = [...this.state.foodList].filter(elem => 
      elem.name.toLowerCase().includes(input.toLowerCase())
      );
      this.setState({
        filteredFood: newFilteredFood
      })

  }


    render() {
        return (
            <div>
            {/* IT4.3: Paso la función de filtrado como prop. */}
                <SearchBar filterFood={this.filterFood} />

            {/* Le pasamos la función addFood al children AddFoodFood */}
                <AddFoodForm addFood={this.addFood}/>

                {/* React necesita que le asignemos una key a cada iteración
                Para poder borrarlo o actualizarlo, solamente ese, no todo */}
                {this.state.filteredFood.map((food, index) => <FoodBox food={food} key={index}/>)}
            </div>
        )
    }
}