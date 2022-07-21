import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'; 
// import Search from './components/Search';

function App() {

 const [filterFoodArray, setFilterFoodArray] = useState(foods);
 const [foodArray, setFoodArray] = useState(foods); 
 const [name, setName] = useState('');
 const [calories, setCalories] = useState(0);
 const [servings, setServings] = useState(0);
 const [image, setImage] = useState('');

 const updateSearch = event =>{
    const newFoodArray = foodArray.filter(eachFood =>{
      return (
      eachFood.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
)
    })
    setFilterFoodArray(newFoodArray);
 };

const handleSubmit =(event) => {
  event.preventDefault();
  const newFood = {name, calories, servings, image};
  setFoodArray(foodArray => [...foodArray, newFood]); 
}

 return (
    <div>
      <label>Search movie titles</label>
        <input
          type="text"
          onChange={updateSearch}
        />
    <AddFoodForm
     name={name}
     calories={calories}
     servings={servings}
     image={image} 
     setName={setName}  
     setCalories={setCalories}
     setServings={setServings}
     setImage={setImage}
     handleSubmit={handleSubmit}
     />
  
<FoodBox
  foods={filterFoodArray}
/>

    </div>
  );
}

export default App;
