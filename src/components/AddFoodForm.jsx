import { useState } from "react";

export default function AddFoodForm(props) {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodCalories, setFoodCalories] = useState("");
  const [foodServing, setFoodServing] = useState("");



  const handleNameInput = (e) => setFoodName(e.target.value);
  const handleImageInput = (e) => setFoodImage(e.target.value);
  const handleCaloriesInput = (e) => setFoodCalories(e.target.value);
  const handleServingInput = (e) => setFoodServing(e.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    const newFoodItem = {
      name: foodName,
      image: foodImage,
      calories: foodCalories,
      serving: foodServing,
    };
    
    console.log("Submitted", newFoodItem)
    props.addFood(newFoodItem)
    
    setFoodName("");
        setFoodImage("");
        setFoodCalories("");
        setFoodServing("");
  }

  return (
    <div className="foodFormContainer">
      <h3>Add new Food here</h3>
      <form className="foodFormWrapper" onSubmit={handleSubmit}>
        <div className="classicForm">
          <label htmlFor="foodNameInput" className="label">
            {" "}
            Food Name{" "}
          </label>
          <input
            id="foodNameInput"
            type="text"
            name="name"
            placeholder="e.g. Spaghetti Bolognese"
            className="input"
            value={foodName}
            onChange={handleNameInput}
          />
        </div>
        <div className="classicForm">
          <label htmlFor="foodImageInput" className="label">
            {" "}
            Image URL{" "}
          </label>
          <input
            id="foodImageInput"
            type="text"
            name="image"
            placeholder="https://example.com/img-spaghetti-bolognese"
            className="input"
            value={foodImage}
            onChange={handleImageInput}
          />
        </div>
        <div className="classicForm">
          <label htmlFor="foodCalroiesInput" className="label">
            {" "}
            Calories{" "}
          </label>
          <input
            id="foodCalroiesInput"
            type="number"
            name="calories"
            placeholder="681"
            className="input"
            value={foodCalories}
            onChange={handleCaloriesInput}
          />
        </div>
        <div className="classicForm">
          <label htmlFor="foodServingInput" className="label">
            {" "}
            Servings{" "}
          </label>
          <input
            id="foodServingInput"
            type="number"
            name="calories"
            placeholder="1"
            className="input"
            value={foodServing}
            onChange={handleServingInput}
          />
        </div>
        <button type="submit">
          CREATE
        </button>
      </form>
    </div>
  );
}
