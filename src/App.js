import React from 'react';
import { useState } from 'react'
import foods from './foods.json';

import Food from './components/Food'
import Controls from './components/Controls'
import Search from './components/Search'

import 'bulma/css/bulma.css';
import './App.css';

function App() {

  let [food, setFood] = useState(foods)




  return (
    <div id="root">

      <h1 className="title">IronNutrition</h1>
      <Search setFood={setFood}/>
      <Controls setFood={setFood} />
      <Food foods={food} />
    </div>
  )
}

export default App;
