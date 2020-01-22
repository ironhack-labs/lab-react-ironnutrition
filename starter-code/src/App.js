import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods,
      // flag que controla a exibiçao do form para adicionar food
      // let flag // flag precisa ser parte do state!
      isAddingFood: false, // flag que controla a exibiçao do form para adicionar food
    };
    this.addFood = this.addFood.bind(this);
  }
  // uma função que troca o booleano da flag quando clicada.
  addFood() {
    this.setState({
      isAddingFood: !this.state.isAddingFood,
    });
  }

  render() {
    function myMapCallbackFunction(food, index) {
      return <Foodbox key={index} {...food} />;
    }
    const JSXFoodObjArr = this.state.foods.map(myMapCallbackFunction);

    // Criar um componente form do tipo classe. O state dele é tudo que o form precisa guardar, etc...

    // escrever uma condicional que decide se renderiza ou não o componente.
    return (
      <div>
        <button name="moreFood" onClick={this.addFood}>
          Adicionar Comida
        </button>

        {this.state.isAddingFood && <AddFoodForm />}
        {JSXFoodObjArr}
      </div>
    );
  }
}

export default App;