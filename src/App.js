import './App.css';
import foods from './foods.json';
import {useState} from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList]= useState(foods)
  const [showForm, setShowForm]= useState(false)
  const [query, setQuery] = useState("")
 
   const handleDelete = (name) => {
    const filteredFood = foodList.filter(food => food.name !== name )

    setFoodList(filteredFood)
} 
  
console.log(query)
  return (
    <div className="App"> 
    <h1>Search</h1>     
    <Search setQuery={setQuery} query={query} />
    <button onClick={() => setShowForm(!showForm)}>Show Form</button>
    {showForm && (
    <AddFoodForm setFoodList={setFoodList} foodList={foodList}  /> 
    )}
        <h1>Food List</h1>
        <div className='container'>       
           {foodList
                    .filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
                    .map(food => 
   <FoodBox food={food} handleDelete={handleDelete} />
        )}
        </div>

    </div>
  );
}

export default App;
