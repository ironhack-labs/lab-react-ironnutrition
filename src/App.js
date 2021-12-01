import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

// 2. PASOS: Metemos el componente dentro de App
class App extends Component {
  state = {
    foods,
    // 4. PASOS: Añadir showFoodForm para poder cambiar el estado de que se muestre el Componente de addFoodForm
    showFoodForm: false,
  };

  /* 8. PASOS: Crear función de addFood para ejecutarla cuando se renderice el componente addFoodForm */
  addFood = (food) => {
    const foodsCopy = [...this.state.foods];

    foodsCopy.push(food);

    this.setState({
      foods: foodsCopy,
      /* 12. PASOS: Cuando añada el formulario cambio el estado de showFoodForm a false para ocultarlo */
      showFoodForm: false,
    });
  };

  // 6. PASOS: Crear función de toggleForm para cambiar si se muestra o no el Form
  toggleForm = () => {
    this.setState({
      showFoodForm: !this.state.showFoodForm,
    });
  };

  /* 14. PASOS: Crea función filterFoods */
  filterFoods = (text) => {
    const newArr = foods.filter((food) => {
      console.log(text);
      return food.name.toLowerCase().includes(text.toLowerCase());
    });

    this.setState({
      foods: newArr,
    });
  };

  render() {
    return (
      <div className="App">
        {/* 7. PASOS: Crear renderizado condicional para mostrar el comp. AddFoodForm si showFoodForm es true
            8. PASOS: Crear un componente AddFoodForm en un archivo aparte */}
        {this.state.showFoodForm && <AddFoodForm addFood={this.addFood} />}
        {/* 5. PASOS: Añadir botón y unirle función de toggleForm para mostrar o no el formulario */}
        <button onClick={() => this.toggleForm()}>Add new food</button>
        {/* 13. PASOS: Creamos componente SearchBar y función filterFoods() */}
        <SearchBar filterFoods={this.filterFoods} />
        {/* // 3. PASOS: Mapeamos todo el array de foods y por cada uno pintamos un componente Foodbox 
        // y le enviamos todas las props por spread operator */}
        {this.state.foods.map((food, idx) => {
          return <Foodbox {...food} key={`${idx}-${food.name}`} />;
        })}
      </div>
    );
  }
}

export default App;
