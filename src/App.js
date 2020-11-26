import React, {useState} from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import DisplayFood from './components/DisplayFood';
import AddFood from './components/AddFood';


function App() {
  const [food, setFoods] = useState(foods)
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }
  const addFormHandler = (food2Add) => {
    setFoods([...foods, foodAdd])
  }

 

  return (
    <div className="App">
      <div>
        {showForm ? 
        ( <AddFood addNewMovie={addFormHandler} toggleForm={toggleForm} />) 
          : 
        ( <button onClick={() => toggleForm()}>Add new food</button> )}
      </div>


      <div>
     {foods.map((food) => (
          <FoodBox key={food.id} {...food}  />
          ))}
      </div>
     <DisplayFood/>
    </div>
  );
}

export default App;
