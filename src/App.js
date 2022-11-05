import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { useState } from 'react';


function App() {
  //SEARCH BAR 部分
  const [state, setstate] = useState({
    query: '',
    list: []
  })
  const [allFood, setFoods] = useState(foods)
  const [foodsData, setFoodsData] = useState(foods)
  console.log({ALLFOOD: allFood}) 
  //hide (collaspe section)
  const [show, setShow] = useState(true);


const addNewFood = (newFood) => {
  //BRACKETS HAVE TO MATCH THE STATES ABOE OUR YOU CAN ONLY ADD 1 NEW FOOD EVER
  const updatedFoods = [...allFood, newFood];
  const updateFoodData = [...foodsData, newFood]
  setFoods(updatedFoods);
  setFoodsData(updateFoodData);

}

  return (
    <div className="App">

<div className="addFoodField">
<button onClick={() => setShow(!show)}>
  {show ? "Hide FORM" : "Add New Food"}
</button>
{show  && <div className="addFoodField">
<AddFoodForm addFood={addNewFood} />
</div>}
</div>

<div className='SearchBar'> 
<SearchBar foods={allFood} queryState={state} setState={setstate}/>
</div>


<div className="foodBox">
{(state.query === "" ? allFood.map((food) => {


return <div >
  <FoodBox  food={{
    name: food.name,
    calories: food.calories,
    image: food.image,
    servings: food.servings
  }} queryState={state} setState={setstate} allFoodForDelBtn={allFood} setFoodsForDelBtn={setFoods}/>
  
</div>
}):


state.list.map((food) => {


  return <div >
    <FoodBox  food={{
      name: food.name,
      calories: food.calories,
      image: food.image,
      servings: food.servings
    }} queryState={state} setState={setstate}/>
    
  </div>
  })


)}

</div>


{/* checking if the array length increases */}
{console.log({ALLTHEFOOD: allFood})}

 
    </div>
  );
}

export default App;
