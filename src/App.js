import React from 'react';
import './App.css';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">

        <FoodBox addFood={() => console.log('holi')} />

    </div>
  );
}

export default App;
