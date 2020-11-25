import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json'



function App() {

  let [food, setfood]=useState(foods.filter((f, index)=>index<4))

  const showForm=()=>{

  }

  return (
   
    <section className="section">
    <div className="container">
      <h1>IronNutrition</h1>

      <div className="columns">
  <div className="column">
    <button onClick={showForm}>Add new food</button>
    {food.map(f=><FoodBox
    key={f.name}
    {...f}
    />)}
  </div>
  <div className="column">
    Second column
  </div>
</div>
    </div>
    
  </section>
  )
}

export default App;
