import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodListCt from './containers/FoodListCt';

function App() {
  return (
    <div className="App">
      <FoodListCt />
      {/* <button className='button is-primary'>Add new food</button> */}
    </div>
  );
}

export default App;
