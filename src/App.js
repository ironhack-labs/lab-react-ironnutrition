import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [newFood, setNewFood] = useState('');
  const [input, setInput] = useState('');

  const deleteButton = (event) => {
    const filteredFoods = food.filter((each) => {if (each.name !== event) {return true}});
    setFood(filteredFoods);
  };

  return (
    <div className="App">
      <div><Search setFood={setFood} input={input} setInput={setInput} /></div>
      <div><AddFoodForm newFood={newFood} setNewFood={setNewFood} food={food} setFood={setFood}/></div>

      <div>
          <h2 className='foodtitle'> Food List </h2>
          <div className='fooddiv'>
            {food
              .filter((each) => {if (each.name.toLowerCase().includes(input.toLowerCase())) {return true}})
              .map((each) => {return (<FoodBox key={each.name} food={each} deleteButton={deleteButton}/>)})}


          </div>
      </div>
    </div>
  )}

export default App;
