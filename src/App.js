import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';


function App() {
  return (
    <div className="App">
      {/* {foods.map(food => <FoodBox {...food} />)}  */}
      {/* Lo de arriba es object destructuring, hace que los objetos del array, las props sean su clave-valor ahorrando código */}
      {foods.map(food => <FoodBox name={food.name} calories={food.calories} image={food.image} />)}
    </div>
  );
}

export default App;
