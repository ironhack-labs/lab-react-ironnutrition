import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App () {
  const [myFoods, setMyFoods] = useState(foods)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)

  const addNewFood = (newFood) => {
    // Create a new array
    const updatedFoods = [...myFoods, newFood];
    setMyFoods(updatedFoods);
  };

  const deleteFood = (deletedFood) => {
    let newFoods = []
    myFoods.forEach(food => {
      if(food.name !== deletedFood) {
        newFoods.push(food)
      }
    })
    setMyFoods(newFoods)
  }
  
  return (
    <div className="App">
      <div className='FoodEntry'>
        {showForm ? <><AddFoodForm addNewFood={addNewFood} /><button className='buttonForm' onClick={()=>setShowForm(false)}>Hide Form</button></> : <button className='buttonForm' onClick={()=>setShowForm(true)}>Add New Food</button>}
      </div>
      <Search search={search} setSearch={setSearch} />
      <h2>Food List</h2>
      <div className='FoodTable'>
        {myFoods.length>0 ? myFoods.map(food => {
          if(food.name.toUpperCase().includes(search.toUpperCase())) {
            return (
              <FoodBox food={food} deleteFood={deleteFood} />
            )
          }
        }) : <div><p>Oops! There is no more content to show.</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/640px-Empty_set_symbol.svg.png' width={150} /></div>}
      </div>
    </div>
  )
}
export default App;