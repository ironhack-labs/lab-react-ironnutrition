import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';


import FoodBox from './components/foodbox/FoodBox'



function App() {
  return (

    <div className="container p-3 mt-4">
      <div className="row">
      <FoodBox/>
      </div>
    </div>
  );
}

export default App;
