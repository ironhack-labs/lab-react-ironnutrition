import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './Foodbox'
import EachFood from './EachFood'
//import { Switch, Route } from 'react-router-dom'


import foods from './foods.json';


function App() {
  return (
    <>
   <EachFood />
   </>
  );
}

export default App;
