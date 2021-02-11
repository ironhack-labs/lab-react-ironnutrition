import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Main from './views/Main/Main'
function App() {
  return (
    <Main food={foods} />
  );
}

export default App;
