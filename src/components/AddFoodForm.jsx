// Your code here
import { Input } from "antd";
import { useState } from "react";

export default function AddFoodForm({ setFoodArray, foodArray }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [id, setId] = useState(foodArray.length + 1);
  const handleId = () => {
    setId((prev) => prev + 1);
  };

  //   const handleName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleImage = (e) => {
  //     setImage(e.target.value);
  //   };

  //   const handleCalories = (e) => {
  //     setCalories(e.target.value);
  //   };

  //   const handleServings = (e) => {
  //     setServings(e.target.value);
  //   };
  const handleStateFunctions = (e, stateFunction) => {
    stateFunction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { id, name, calories, image, servings };
    setFoodArray([newFood, ...foodArray]);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
    handleId();
  };
  console.log(foodArray);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        onChange={(e) => {
          handleStateFunctions(e, setName);
        }}
        name="name"
        value={name}
        type="text"
      />
      <label htmlFor="image">Image</label>
      <Input
        onChange={(e) => {
          handleStateFunctions(e, setImage);
        }}
        name="image"
        value={image}
        type="text"
      />
      <label htmlFor="calories">Calories</label>
      <Input
        onChange={(e) => {
          handleStateFunctions(e, setCalories);
        }}
        name="calories"
        value={calories}
        type="number"
      />
      <label htmlFor="servings">Servings</label>
      <Input
        onChange={(e) => {
          handleStateFunctions(e, setServings);
        }}
        name="servings"
        value={servings}
        type="number"
      />
      <button type="submit">Create</button>
    </form>
  );
}