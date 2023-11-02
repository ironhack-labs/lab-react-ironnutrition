import { useState } from "react";

function AddFood(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log("Submitted: ", newFood);
    let newFoods =[...props.foods]
    newFoods.unshift(newFood)
    props.method(newFoods)
    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  };

  return (
    <div className="form-div">
        <h2>Add Food Entry</h2>
        <form>
            <label>Name<input type="text" name="name" onChange={handleNameInput}></input></label>
            <label>Image<input type="text" name="image" onChange={handleImageInput}></input></label>
            <label>Calories<input type="text" name="calories" onChange={handleCaloriesInput}></input></label>
            <label>Serving<input type="text" name="servings"onChange={handleServingsInput}></input></label>
            <button type="submit" onClick={handleSubmit}>Create</button>
            <hr></hr>
            
        </form>
    </div>
  );
}

export default AddFood;