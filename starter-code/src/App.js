import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import SearchForm from './components/SearchForm';
import foods from './foods.json';

class App extends Component {
  state = {
    appFoods: foods,
    appFoodsOriginal: foods,
  }

  mostrarTodaysFood = () => {
    let nuevaListaComida = [...this.state.appFoodsOriginal]
    let listaFiltrada = nuevaListaComida.filter(function(item){
      if(item.quantity > 0){
        return true;
      }else{
        return false;
      }
    })
    return listaFiltrada
  }

  calcularTotalCalorias = () => {
    let listaComidas = [...this.state.appFoodsOriginal]
    let total = 0
    listaComidas.forEach(function(item){
      total += item.quantity * item.calories
    })
    return total
  }

  addFoodToTodaysFoods = (food, quantityToAdd) => {
    let newTodaysFoods = [...this.state.appFoodsOriginal]
    newTodaysFoods.forEach(function(item){
      if(item.name === food.name){
        item.quantity += parseInt(quantityToAdd)
      }
    });
    this.setState({appFoodsOriginal: newTodaysFoods})
  }

  searchFoods = (search) => {
    let nuevaListaComida = [...this.state.appFoodsOriginal]
    let listaFiltrada = nuevaListaComida.filter(function(item){
      if(item.name.toUpperCase().includes(search.toUpperCase())){
        return true;
      }else{
        return false;
      }
    })
    this.setState({appFoods: listaFiltrada})
  }

  addNewFood = (food) => {
    let nuevaListaComida = [...this.state.appFoods]
    nuevaListaComida.push(food)
    this.setState({
      appFoods: nuevaListaComida,
      appFoodsOriginal: nuevaListaComida,
    })
  }

  removeFood = (food) => {
    let listaComidas = [...this.state.appFoodsOriginal]
    listaComidas.forEach(function(item){
      if(item.name === food.name){
        item.quantity = 0
      }
    })
    this.setState({appFoodsOriginal: listaComidas})
  }

  render() {
    return (
      <div className="App">
        <SearchForm busquedaFoods={this.searchFoods}/>
        <div className="columns">
          <div className="column">
            <FoodList platos={this.state.appFoods} addFoodToTodaysFoods={this.addFoodToTodaysFoods}/>
            <AddFood functionToAddFood={this.addNewFood} />
          </div>
          <div className="column">
            <h3>Today's foods</h3>
            <ul>
              {this.mostrarTodaysFood().map((item, index) => {
                return (
                  <li key={index}>
                    {item.quantity} {item.name} = {item.quantity * item.calories} cal
                    <button className="buttonRemove" onClick={() => this.removeFood(item)}>x</button>
                  </li>
                )
              })}
              <li>Total: {this.calcularTotalCalorias()}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

