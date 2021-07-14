import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodList from './FoodList';

function App() {
  const list = [...foods];

  return (
    <>
      <div className="box">
        <FoodList />
      </div>
    </>
  );
}

export default App;
