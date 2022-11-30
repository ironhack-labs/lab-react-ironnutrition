import './App.css';
import foods from './foods.json'
import {FoodBox} from './FoodBox';
import { useState } from 'react';
import {AddFoodForm} from './AddFoodForm';
import Search from './Search';


function App() {
  const [food, setFood] = useState(foods)
  const [query, setQuery] = useState("")
  const [isShown, setIsShown] = useState(false)


  const filteredFood = food.filter(food => {

    return food.name.toLowerCase().includes(query.toLowerCase())

    
})

  const deleteFood = (foodName) => {
  setFood(food => {
      return food.filter(food => food.name !== foodName)
})

}

  return (
    <div className="App">

      <button onClick={() => setIsShown(!isShown)}>:D</button>

      {isShown && <AddFoodForm food={food} setFood = {setFood}/>}
    

      <Search setQueryProp={setQuery}/>

      {!filteredFood.length && <p>nope! empty</p>}

      {filteredFood.map((food)=> {

        return (
  
            <FoodBox food={food} deleteFoodProp={deleteFood} />
        )
        
      })}

    </div>
  );
}

export default App;
