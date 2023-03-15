import { Input, Button } from 'antd';
import { useState } from 'react';
import "./../App"

function AddFoodForm({getFood}) {
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodCalories, setFoodCalories] = useState('');
  const [foodServings, setFoodServings] = useState('');

  const handleNameInput = (e) => setFoodName(e.target.value);
  const handleFoodImageInput = (e) => setFoodImage(e.target.value);
  const handleFoodCaloriesInput = (e) => setFoodCalories(e.target.value);
  const handleFoodServings = (e) => setFoodServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const newFood = {
    name: foodName,
    image: foodImage,
    calories: foodCalories,
    servings: foodServings,
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>
        Food Name:
        <Input
          onChange={handleNameInput}
          type="text"
          name="foodName"
          value={foodName}
        />
      </label>

      <label>
        {' '}
        Food Image: <Input
        onChange={handleFoodImageInput}
          type="text"
          name="foodImage"
          value={foodImage}
        />{' '}
      </label>
      <label>
        {' '}
        Food Calories:{' '}
        <Input onChange={handleFoodCaloriesInput}   type="number" name="foodCalories" value={foodCalories} />{' '}
      </label>
      <label>
        {' '}
        Food Servings:{' '}
        <Input onChange={handleFoodServings}  type="number" name="foodServings" value={foodServings} />{' '}
      </label>

      <Button className='add-food' type = "submit" onClick={()=> getFood(newFood)}> Add Food </Button>

    </form>
  );

}


export default AddFoodForm;