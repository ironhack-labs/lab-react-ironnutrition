import React from 'react';
import './App.css';
import FoodBox from './Component/FoodBox/FoodBox';
import NewFoodCreate from './Component/Form/NewFoodCreate';


function App() {
  return (
    <div className="App">

      <header>
        <h1>Iron Nutricion</h1>
      </header>
            
      <section>
        <NewFoodCreate/>
      </section>

      <section>
        <FoodBox/>
      </section>
    </div>
  );
}

export default App;
