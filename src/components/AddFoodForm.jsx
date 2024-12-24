import { useState } from "react";

function AddFoodForm(props) {

    const {foods, setFoods} = props;

    const [ foodName, setFoodName ] = useState("");
    const [ foodImg, setFoodImg ] = useState("");
    const [ foodCalories, setFoodCalories ] = useState(0);
    const [ foodServings, setFoodServings ] = useState(0);

    const handleFoodName = (e) => setFoodName(e.target.value);
    const handleFoodImg = (e) => setFoodImg(e.target.value);
    const handleFoodCalories = (e) => setFoodCalories(e.target.value);
    const handleFoodServings = (e) => setFoodServings(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let max = 1000000;
        let min = 1000;
        let id = Math.floor(Math.random() * (max - min)) + min;

        const newFood = {
            id: `${id}`,
            name: foodName,
            calories: foodCalories,
            image: foodImg,
            servings: foodServings
        }

        const newFoodArr = [...foods, newFood];
        setFoods(newFoodArr);

        setFoodName("");
        setFoodImg("");
        setFoodCalories(0);
        setFoodServings(0);
    }
    
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Add Food Entry</h1>

      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={foodName} onChange={handleFoodName}/>
      </div>

      <div>
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" name="image" value={foodImg} onChange={handleFoodImg}/>
      </div>

      <div>
        <label htmlFor="calories">Calories:</label>
        <input id="calories" name="calories" type="number" value={foodCalories} onChange={handleFoodCalories}/>
      </div>

      <div>
        <label htmlFor="servings">Servings:</label>
        <input id="servings" name="servings" type="number" value={foodServings} onChange={handleFoodServings}/>
      </div>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
