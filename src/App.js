import './App.css';
import foods from './foods.json';
import {useState} from "react";
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [foodList, setFoodList]= useState(foods)
  const [query, setQuery] = useState("")
 
/*   const deleteFood = (foodList) => {
    const filteredFood = foodList.filter(food => food.name !== food )

    setFoodList(filteredFood)
} */
  
console.log(query)
  return (
    <div className="App"> 
    <h1>Search</h1>     
    <Search setQuery={setQuery} query={query} />
    <AddFoodForm setFoodList={setFoodList} foodList={foodList}  /> 
        <h1>Food List</h1>
        <div className='container'>       
           {foodList
                    .filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
                    .map(food => 
   <FoodBox food={food} /* deleteFood={deleteFood} */ />
        )}
        </div>

    </div>
  );
}

export default App;
