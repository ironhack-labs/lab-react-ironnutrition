import { useState } from "react"
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const [food, setFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { ...food};
    props.addNewFood(newFood);

    setFood({
        name: '',
        image: '',
        calories: 0,
        servings: 0,
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={food.name}
        type="text"
        className="name"
        onChange={(e) => setFood({ ...food, name: e.target.value })}
      />

      <label>Image</label>
      <Input
        value={food.image}
        type="text"
        className="image"
        onChange={(e) => setFood({ ...food, image: e.target.value })}
      />

      <label>Calories</label>
      <Input
        value={food.calories}
        type="text"
        className="calories"
        onChange={(e) => setFood({ ...food, calories: e.target.value })}
      />

      <label>Servings</label>
      <Input
        value={food.servings}
        type="text"
        className="servings"
        onChange={(e) => setFood({ ...food, servings: e.target.value })}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
