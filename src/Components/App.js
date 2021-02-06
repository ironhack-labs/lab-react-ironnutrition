import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import FoodForm from './FoodForm'
import Search from './Search'

function App() {
  return (
    <div>
      <div>
        <Search />
      </div>
      {/* <div>
        <FoodBox />
      </div> */}
    </div>
  );
}

export default App;
