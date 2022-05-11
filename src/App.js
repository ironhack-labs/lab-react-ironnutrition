import React from 'react';

import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json';
import Foodbox from './components/Foodbox';

function App() {
  return (
    <Foodbox foods={foods} />
  );
}

export default App;
