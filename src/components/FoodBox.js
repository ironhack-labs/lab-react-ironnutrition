import React, { Component } from "react";
import foods from '../foods.json';
import Food from './Food';
import AddFood from './AddFood';
import SearchFood from './SearchFood';
//como vinculo css??


class FoodBox extends Component {
  //cuando se le pasan props?-cuando traigo algún dato del padre.
  constructor() {
    super();
    //igualar el state a foods donde estan todos los datos entre{}??
    this.state = {foods};
  }
  //iteración 3 add food
  //esta es la función que se inicia 
  addFoodHandler = theFood => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(theFood);
    this.setState({
      foods: foodCopy
    })
  }


  //iteración 5
  //método para el boton de + plusQuantity:
  //el input esta pasando un valor de 1, que es el que se muestra en la app, tengo que pasar ese uno hasta el objeto foods
  //cambiar el contador
  //plusQuantity = () => {
   // this.state.foods[quantity] = value;
  
  

  render() {
//cuando es necesario el render? Creo que en clases si.
//tengo que cambiar el this del map una vez hago lo del AddFood??
    return (
      <div>
        <SearchFood />
        <AddFood addtheFood={this.addFoodHandler}/>
        {
          this.state.foods.map((oneFood, index) => {
            return (
              <Food key={index} image={oneFood.image} name={oneFood.name} calories={oneFood.calories} />
          )})
        } 
      </div>
      
    )
  }
}


export default FoodBox;