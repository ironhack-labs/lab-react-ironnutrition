import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';

function App() {
  const [food, setFood] = useState('');
  return (
    <>
      {foods.map((e) => {
        return (
          <FoodBox
            name={e.name}
            calories={e.calories}
            image={e.image}
            quantity={e.quantity}
          />
        );
      })}
      ;
      <Form />
    </>
  );
}

export default App;
