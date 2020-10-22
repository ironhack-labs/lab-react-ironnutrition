import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox'

function App() {
  return (
    <div className="App">
      {foods.map(item => 
          <FoodBox
          key={item.name}
          name={item.name}
          calories={item.calories}
          image={item.image}
          quantity={item.quantity}
           />
     )}
     
    </div>
  );
}

export default App;

