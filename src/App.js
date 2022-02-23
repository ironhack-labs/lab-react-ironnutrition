import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodArr from './foods.json';
import FoodBox from './components/FoodBox';

function App() {

  const [food, setFood] = useState(foodArr);

  return (
    <div className="App">
      <header className="App-header"></header>
      {foodArr.map(element => {
            return (
            <FoodBox 
            key = {element.id}
            name = {element.name} 
            calories = {element.calories} 
            image = {element.image}
            quantity = {element.quantity}/>
            )
        })}
    </div>
  );
}

export default App;
