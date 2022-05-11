import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import Foodbox from './components/Foodbox';

function App() {

  return (
    <>
      {foods.map((element) => {
        return (
          <Foodbox
            name={element.name}
            calories={element.calories}
            image={element.image}
            quantity={element.quantity}
          />
        )
      })
      }
    </>
  )
}

export default App;
