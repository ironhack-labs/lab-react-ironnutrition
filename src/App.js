import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [meals, setMeals] = useState(foods);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
  const [filteredMealsArray, setFilteredMealArray] = useState(foods);
  const updateName = (event) => setName(event.currentTarget.value);
  const updateImage = (event) => setImage(event.currentTarget.value);
  const updateCalories = (event) => setCalories(event.currentTarget.value);
  const updateServings = (event) => setServings(event.currentTarget.value);

  // const foodsCopy = [...foods];

  const handleSubmitFood = (event) => {
    event.preventDefault();
    const newFoodObject = {
      name,
      image,
      calories,
      servings,
    };
    setMeals([...meals, newFoodObject]);
    setFilteredMealArray([...filteredMealsArray, newFoodObject]);
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  const updateSearch = (event) => {
    const newFoodArray = meals.filter((individualFood) => {
      return individualFood.name
        .toLowerCase()
        .includes(event.currentTarget.value.toLowerCase());
    });
    setFilteredMealArray(newFoodArray);
  };

  const deleteFood = (name) => {
    
   let newMeals = meals.filter((meal) => meal.name !== name)
    
    setMeals(newMeals)
  setFilteredMealArray(newMeals)
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <label>Search Foods </label>
        <input type="text" onChange={updateSearch} />
      </div>

      <div>
        <AddFoodForm
          name={name}
          image={image}
          calories={calories}
          servings={servings}
          updateName={updateName}
          updateImage={updateImage}
          updateCalories={updateCalories}
          updateServings={updateServings}
          handleSubmitFood={handleSubmitFood}
        />
      </div>

      <div className="Meals">
        <FoodBox foods={filteredMealsArray}
        deleteFood={deleteFood} />
      </div>
    </div>
  );
}

export default App;
