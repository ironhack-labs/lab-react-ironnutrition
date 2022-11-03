import { Divider, Input, Space } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);


  // const [formData, setFormData] = useState({
  //   name: '',
  //   calories: '',
  //   image: 0,
  //   servings: 0,
  // })

  const addFood = (event) => {
    event.preventDefault();

    const newFood = {
      name: nameInput,
      calories: caloriesInput,
      image: imageInput,
      servings: servingsInput,
    };
    console.log(newFood);

    props.addFoods(newFood)

  };

  const handleChangeName = (event) => {
    setNameInput(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImageInput(event.target.value);
  };

  const handleChangeCalorie = (event) => {
    setCaloriesInput(event.target.value);
  };

  const handleChangeServings = (event) => {
    setServingsInput(event.target.value);
  };

  return (
    <form>
      <Space direction="vertical">
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={nameInput} type="text" onChange={handleChangeName} />

        <label>Image</label>
        <Input value={imageInput} type="text" onChange={handleChangeImage} />

        <label>Calories</label>
        <Input
          value={caloriesInput}
          type="number"
          onChange={handleChangeCalorie}
        />

        <label>Servings</label>
        <Input
          value={servingsInput}
          type="number"
          onChange={handleChangeServings}
        />

        <button onClick={addFood}>Create</button>
      </Space>
    </form>
  );
}

export default AddFoodForm;
