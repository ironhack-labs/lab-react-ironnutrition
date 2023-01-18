import FoodBox from './components/FoodBox';
import './App.css';
import foodFromJson from "./foods.json"
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {
  
  const [foods, setFoods] = useState(foodFromJson)
  const [showForm, setShowForm] = useState(true);

  // search bar
  const [searchQuery, setSearchQuery] = useState("");

  const foodToDisplay = foods.filter( (food) => {
    return food.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  // creating new food item
  const createFood = (newFoodObj) => {
    setFoods( (prevListOfFood) => {
      const newList = [newFoodObj, ...prevListOfFood];
      return newList;
    });
  }

   // deleting a food item
   const deleteFood = (name) => {
    const updatedFoodArr = foods.filter(food => {
        return food.name !== name;
    });
    setFoods(updatedFoodArr);
    
    };

    let titleMessage = foods.length > 0 
    ? <h1>Current number of food listed is {foodToDisplay.length}</h1> 
    : <h1>There are no more items to be displayed</h1>

  
  return (
    <div className="App">
      
      {/* hide : show form */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add new food"}
      </button>
      {showForm && <AddFoodForm callbackAddFoodForm={createFood}/>}

      <form className='form'>
        <label> Search by name:
            <input 
              type="text" 
              name="searchQuery" 
              placeholder="type your food" 
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value) }} 
              />
        </label>
      </form>
      
      {titleMessage}
      
        {foodToDisplay.map((e) => {
          return (
              <div id='Food' key= {e.name} >
              
                <FoodBox food={e} deleteCallback={deleteFood} />
              </div> )
        })}

    </div>  
   )
}

export default App;
