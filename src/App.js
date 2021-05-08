import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

import Main from './Components/Main/Main';

import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <Main foods={foods} />
    </div>
  );
}

export default App;
