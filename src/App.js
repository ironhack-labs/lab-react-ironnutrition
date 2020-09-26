import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'; 
import Title from './components/Title';
import SplittedBody from './components/SplittedBody';

function App() {
  return (
    <div className="App">
      <Title />
      <SplittedBody foods={foods} />
    </div>
  );
};

export default App;