import { Input } from 'antd';
import { useState } from 'react';

function AddFormFood(props) {
  const [name, setName] = useState('');

  const [image, setImage] = useState('');

  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.setFoodChange((prevFoods) => {
      return [newFood, ...prevFoods];
    });
  };
  return (
    <div id="create">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="text"
          name="image"
          placeholder="Image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <Input
          type="text"
          name="calories"
          placeholder="Calories"
          value={calories}
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />
        <Input
          type="text"
          name="servings"
          placeholder="Servings"
          value={servings}
          onChange={(e) => {
            setServings(e.target.value);
          }}
        />

        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFormFood;
