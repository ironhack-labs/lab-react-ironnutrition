import { Divider, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm(props) {
  const AddFood = props.AddFood;

  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    console.log(`Listening to the user typing - ${value} - in the ${name} box`);
    setNewFood({ ...newFood, [name]: value });
    console.log(`Now the state is ${Object.values(newFood)}`);
  };

  const submitFood = (event) => {
    console.log(
      "Prevent the page from reloading, calling AddFood() in App.jsx and clearing the form"
    );
    console.log(`The newFood element has the following values: ${Object.values(newFood)}`);
    event.preventDefault();
    AddFood(newFood);
    setNewFood({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={newFood.name}
        type="text"
        onChange={inputChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={newFood.image}
        type="text"
        onChange={inputChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={newFood.calories}
        type="number"
        onChange={inputChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={newFood.servings}
        type="number"
        onChange={inputChange}
      />

      <Button type="submit" onClick={submitFood}>
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
