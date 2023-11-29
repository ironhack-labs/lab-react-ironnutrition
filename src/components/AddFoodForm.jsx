import { useState } from "react";

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { _id: Math.random(), name, image, calories, servings };
    addNewFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h2 className="form-title">Add a food</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          </div>
          <input type="text" name="name" value={name} onChange={handleName} required />
        

        <div>
          <label htmlFor="director">Image</label>
          </div>
          <input type="text" name="image" value={image} onChange={handleImage} />
        

        <div>
          <label htmlFor="calories">Calories</label>
          </div>
          <input type="number" name="calories" value={calories} onChange={handleCalories} min={0} max={10} />
        

        <div>
          <label htmlFor="servings">Servings</label>
          </div>
          <input type="number" name="servings" value={servings} onChange={handleServings} />
        
          <div>
        <button className="form-button" type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddFoodForm;
