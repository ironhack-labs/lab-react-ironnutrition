import React from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

const foodCollection = [...foods]
console.log(foodCollection[0].name)


function App() {
  return (
    <div className="App">
      {foodCollection.map(el =>
        <FoodBox
          key={el.name}
          name={el.name}
          image={el.image}
          calories={el.calories}
          quantity={el.quantity}
          {...foodCollection}
        />
      )}
    </div>
  );
}

export default App;
