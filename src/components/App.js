import React from 'react';
import '../styles/App.css';
import 'bulma/css/bulma.css'
// import Foods from './Foods';
import NewFood from './NewFood';

import foods from '../data/foods.json';
const foodsCopy = [...foods]

// console.log(foodsCopy)

function App() {

  return (
    <>
      <NewFood foodsCopy={foodsCopy} />
      {/* <Foods foodsCopy={foodsCopy} /> */}

    </>
  )
}

export default App;
