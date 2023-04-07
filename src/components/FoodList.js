import foodsJSON from './../foods.json'; // import the JSON data
import { useState } from 'react';
import FoodBox from './../components/FoodBox'; // import the FoodBox component
import AddFoodForm from './../components/AddFoodForm'; // import the AddFoodForm component
import EmptyList from './EmptyList';
import Search from './Search';
import { Button } from 'antd';
import { v4 as randomId } from 'uuid'; // import the randomId function from the uuid library

function FoodList() {
  const [foods, setFoods] = useState(foodsJSON); // set initial state with the JSON data
  const [updatedFoods, setUpdatedFoods] = useState(foods); // create a copy of the foods state to manipulate
  const [formShowing, setFormShowing] = useState(false); // set initial state of the form

  const toggleForm = () => setFormShowing(!formShowing); // toggle the form

  const addFood = (foodObj) => { // function to add new food object to the list
    const updatedFoods = [foodObj, ...foods]; // add the new food object to the start of the array

    setFoods(updatedFoods); // update the original foods state
    setUpdatedFoods(updatedFoods); // update the copy of the foods state to display
  };

  const filterFoodList = (char) => { // function to filter the food list based on user input
    let filteredFoods;

    if (char === '') {
      filteredFoods = foods;
    } else {
      filteredFoods = updatedFoods.filter((eachFood) => {
        return eachFood.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setUpdatedFoods(filteredFoods); // update the copy of the foods state to display
  };

  const deleteFood = (foodNameStr) => { // function to delete food object from the list
    const filteredFoods = updatedFoods.filter((oneFood) => {
      return oneFood.name !== foodNameStr; // exclude the food object we want to delete
    });

    setUpdatedFoods(filteredFoods); // update the copy of the foods state to display
  };

  return (
    <div className="App">
      <Button onClick={toggleForm} className="toggle-btn">
        {formShowing ? 'Hide Form' : 'Add New Food'}
      </Button>
      {formShowing && <AddFoodForm addFoodHandler={addFood} />}

      <Search filterFoodHandler={filterFoodList} />
      <div className="foods-list">
        {!updatedFoods.length && <EmptyList />}

        {updatedFoods.map((oneFood) => (
          <FoodBox food={oneFood} deleteFood={deleteFood} key={randomId()} /> // map over the updatedFoods array and display the FoodBox component for each object
        ))}
      </div>
    </div>
  );
}

export default FoodList;
