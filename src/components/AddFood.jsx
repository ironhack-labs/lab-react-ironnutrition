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
  const [foodState, setFoodState] = useState({
    food: '',
    image: '',
    calories: 0,
    quantity: 0,
  });

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
      name: foodName,
      calories: foodCalories,
      image: imageURL,
      quantity: 1,
    };

    // set     props.handleFood(foodState) here for the shorter wway;
    props.handleFood(newFood);

    // then here we can copy the setfoodstate from the above shorter one to pass in all the states.
    setFoodName('');
    setFoodCalories('');
    setImageURL('');

    setIsShown(false);
  };

  const isShownButton = () => {
    setIsShown(!isShown);
  };
  return (
    <div className="AddMovie">
      <button onClick={isShownButton}>{isShown ? 'Hide' : 'Show'}</button>
      <h4>Add new food </h4>
      {/* form doesnt need action cause thats the old fashioned way */}
      {isShown ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="foodName">Food:</label>
          <input
            name="food"
            type="text"
            value={foodName}
            id="foodName"
            onChange={handleFoodNameInput}
          />

          <label htmlFor="foodCalories">Calories:</label>
          <input
            name="calories"
            type="text"
            value={foodCalories}
            id="foodCalories"
            onChange={handleFoodCaloriesInput}
          />

          <label htmlFor="imageURL">Image:</label>
          <input
            //  these have to match uptop to pull the event value
            name="image"
            type="text"
            value={imageURL}
            id="imageURL"
            onChange={handleImageURLInput}
          />

          {/* <label htmlFor="foodQuan">Quantity:</label>
          <input
            type="number"
            value={foodQuan}
            id="foodQuan"
            onChange={handleQuantityInput}
          /> */}
          <button type="submit">Add Food</button>
        </form>
      ) : null}
    </div>
  );
};
export default AddFood;
