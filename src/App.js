import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [allFood, setFoods] = foods
  console.log({ALLFOOD: foods}) 

  return (
    <div className="App">

<div className="foodBox">
{foods.map((food) => {

console.log({QUICKTES:food.image})
return <div >
  <FoodBox  food={{
    name: food.name,
    calories: food.calories,
    image: food.image,
    servings: food.servings
  }}/>
 

</div>
})}
</div>

 
    </div>
  );
}

export default App;
