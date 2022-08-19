
import './App.css';

import FoodBox from './components/FoodBox/FoodBox'
import foods from './foods.json';

<h1> Foods Items List</h1>
{foods.map((food, index) => { 
  return ( 
  <div key={index}>
  <p>{food.name}</p>
  <img src={food.image} width={150} alt="food-img"/>

</div>
);
})}




export default App;
