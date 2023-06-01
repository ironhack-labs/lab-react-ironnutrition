import foodsJSON from './../foods.json';
import { useState } from 'react';
import FoodBox from './../components/FoodBox';
import AddFoodForm from './../components/AddFoodForm';
import EmptyList from './EmptyList';
import Search from './Search';
import { Button } from 'antd';
import { v4 as randomId } from 'uuid';
import { nanoid } from 'nanoid';

function FoodList() {
  const [foods, setFoods] = useState(foodsJSON); // Array that we render/show as a list
  const [updatedFoods, setUpdatedFoods] = useState(foods);
  const [formShowing, setFormShowing] = useState(false);

  const toggleForm = () => setFormShowing(!formShowing);

  const addFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];

    setFoods(updatedFoods);
    setUpdatedFoods(updatedFoods);
  };

  const filterFoodList = (char) => {
    let filteredFoods;

    if (char === '') {
      filteredFoods = foods;
    } else {
      filteredFoods = updatedFoods.filter((eachFood) => {
        return eachFood.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setUpdatedFoods(filteredFoods);
  };

  const deleteFood = (foodId) => {
    const filteredFoods = updatedFoods.filter((oneFood) => {
      return oneFood.id !== foodId; // exclude the food object we want to delete
    });

    setUpdatedFoods(filteredFoods);
  };

  return (
    <div className="App">
    <div>
      <Button onClick={toggleForm} className="toggle-btn">
        {formShowing ? 'Hide Form' : 'Add New Food'}
      </Button>
      </div>
      {formShowing && <AddFoodForm addFoodHandler={addFood} />}

      {/* <AddFoodForm addFood={addFood} /> */}

      <Search filterFoodHandler={filterFoodList} />
      <div className="foods-list">
        {!updatedFoods.length && <EmptyList />}

        {updatedFoods.map((oneFood) => {
          oneFood.id = nanoid()
          return(
          <FoodBox key={nanoid()} food={oneFood} deleteFood={deleteFood} />
          );
        })}
      </div>
    </div>
  );
}

export default FoodList;