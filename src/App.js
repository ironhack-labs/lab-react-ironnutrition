import React from 'react';
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Foodlist from "./components/Foodlist/Foodlist"
import './App.css';

function App() {
  return (
    <div className="App">
     <Foodlist foods={foods} />
    </div>
  );
}

export default App;
