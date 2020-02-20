import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search'
import ComidaAgregada from './components/ComidaAgregada';
import 'bulma/css/bulma.css';
import './App.css';
import NewComida from './components/NewComida';


class App extends Component {
  //componente padre
  state={
    foods: foods,
    addFood : [],
    newFood: {name:'', image:'', calories:0},
    mostrarForm: false
  }
  //findFood estamos recibiendo todo lo que viene del componente search
  findFood = (keys) => {
    console.log(keys)
    //quitamos el this.state porque queremos buscar en toda la lista y no en el estado actual
    // this.setState({foods: this.state.foods.filter(food => food.name.includes(keys))})
    this.setState({foods: foods.filter( food => food.name.toLowerCase().includes(keys.toLowerCase()))})
  }

  handleInput = (e) => { 
    const {value, id} = e.target
    this.setState({foods : this.state.foods.map((food,i) => ( id==i ) ? {...food, quantity: value} : food)
    })
  }

  addFood = ( id ) => {
    this.setState(prevState =>{
      return {
        ...prevState,
        addFood:[
          ...prevState.addFood,
          this.state.foods[id]
        ]
      }
    })
  }

  //despues de hagas push metelo al estado
  addNewFood = (e) => {
    e.preventDefault()
    foods.push(this.state.newFood)
    this.setState({foods})
  }
  
  handleInputNewComida = (e) => {
    const {name,value} = e.target
    this.setState(prevState =>{
      return{
        ...prevState,
        newFood:{
          ...prevState.newFood,
          [name]: value
        }
      }
    })
  }

  toggleForm = () =>{
    this.setState({mostrarForm: !this.state.mostrarForm})
  }
  
  render() {
    console.log(foods)
    return (
      <div className="App">
        <div>
          {/*para referirte a la propiedad de una clase hay que referir this, esta es de App y su metodo es toggleForm*/}
          {this.state.mostrarForm ? <NewComida newFood={this.state.newFood} handleInputNewComida={this.handleInputNewComida} addNewFood={this.addNewFood} /> : null}  
        <button onClick={this.toggleForm}>Show form</button>
        </div>
        {/* le pasamos la funcion findFood al componente search para que pueda hacer uso de la funcion*/}
        <Search findFood={this.findFood}/>
        {this.state.foods.map( (food,i) => <FoodBox key={i} food={food} handleInput={this.handleInput} id={i}  addFood={this.addFood}/>)}
        <div className="Totalfood">
        {/*pasamos el state*/}
        <ComidaAgregada addFood={this.state.addFood}/>
        </div>
      </div>
    );
  }
}

export default App;
