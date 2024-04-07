import { useState } from 'react';
import foodsJson from "../../../foods.json";
import AddFoodForm from './AddFoodForm/AddFoodForm';
import FoodBox from './FoodBox/FoodBox';
import SearchBar from './SearchBar/SearchBar';
import './FoodList.css';

function FoodList() {

  const [foods, setFoods] = useState(foodsJson);

  const handleSearchBar = (event) => {
    const foodSearch = event.currentTarget.value.toLowerCase();
    setFoods(
      foodsJson.filter(food => food.name.toLowerCase().includes(foodSearch))
    );
  }

  const handleDeleteFood = (foodId) => {
    const foodFilter = foods.filter(food => food.id !== foodId);
    setFoods(foodFilter);
  }

  const handleAddFood = (newFood) => {
    const newId = foods.length > 0 ? foods[foods.length - 1].id + 1 : 1;
    const addIdToNewFood = {id: newId, ...newFood};
    const foodToAdd = [...foods, addIdToNewFood];
    setFoods(foodToAdd);
  }

  return (
    <div>
      <AddFoodForm onAddFood={handleAddFood}/>

      <SearchBar onSearchBar={handleSearchBar}/>
      
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 m-5">
        {foods.length > 0 ? (
          foods?.map((food, index) => 
            <FoodBox key={food.id} {...food} handleDeleteFood={handleDeleteFood}/>
          )
        ) : (
          <div className='d-flex flex-column align-items-center'>
            <p>Oops! There is no more content to show.</p>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/1200px-Empty_set_symbol.svg.png' alt='Empty' style={{height: '300px'}}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodList;