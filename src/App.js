import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox';
import AddNewFood from './component/AddNewFood'
import './App.css';

function App() {
  return (
    <div className="App">
    <AddNewFood />
    {foods.map((food) => {
      return (
        <div>
          <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} />
        </div>
      )
    })}
    </div>
  );
}
// array de objetos, lo primero es hacer un map
// la idea es: pasar de tener 1 array de objetos a un array de elementos de react
// dentro de cada objeto va a agregar ahi un componete
/// primer argumento de map: es cada uno de esos objetos

// iterar foods,sobre el elemento foodbox
export default App;
