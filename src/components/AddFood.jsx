import { useState } from 'react';
import React from 'react';

const AddFood = (props) => {
  // states

  const [isShown, setIsShown] = useState(false);
  const [foodName, setFoodName] = useState('');

  const [foodCalories, setFoodCalories] = useState(0);

  const [imageURL, setImageURL] = useState('');

  // another way
  // this is an object
  // const [foodState, setFoodState] = useState({
  //   food: '',
  //   image: '',
  //   calories: 0,
  //   quantity: 0,
  // });

  // use this fucntion for all handlers for fast way. and shift all values to foodstate.foood / foodstate.calories
  // const handleFoodState = (e) => {
  //   setFoodState({ ...foodState, [e.target.name]: e.target.value });
  // };

  // const [foodQuan, setFoodQuan] = useState(0);

  // handle the inputs

  const handleFoodNameInput = (e) => {
    setFoodName(e.target.value);
  };
  const handleFoodCaloriesInput = (e) => {
    setFoodCalories(e.target.value);
  };

  const handleImageURLInput = (e) => {
    setImageURL(e.target.value);
  };
  // const handleQuantityInput = (e) => {
  //   setQuantity(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      'name': foodName,
      'calories': Number(foodCalories),
      'image': imageURL,
      'quantity': 1
    };

    // set     props.handleFood(foodState) here for the shorter wway;
    props.addFood(newFood);
    console.log(newFood);
    // then here we can copy the setfoodstate from the above shorter one to pass in all the states.
    setFoodName('');
    setFoodCalories(0);
    setImageURL('');

    setIsShown(false);
  };

  const isShownButton = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <button onClick={isShownButton}>{isShown ? 'Hide' : 'Show'}</button>

      {/* form doesnt need action cause thats the old fashioned way */}
      {isShown ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="foodName">Food:</label>
            <input
              name="food"
              type="text"
              id="foodName"
              value={foodName}
              onChange={handleFoodNameInput}
            />

            <label htmlFor="foodCalories">Calories:</label>
            <input
              name="calories"
              type="number"
              id="foodCalories"
              value={foodCalories}
              onChange={handleFoodCaloriesInput}
            />

            <label htmlFor="imageURL">Image:</label>
            <input
              //  these have to match uptop to pull the event value
              name="image"
              type="text"
              id="imageURL"
              value={imageURL}
              onChange={handleImageURLInput}
            />
          </div>
          <button type="submit">Add Food</button>
        </form>
      ) : null}
    </div>
  );
};
export default AddFood;
