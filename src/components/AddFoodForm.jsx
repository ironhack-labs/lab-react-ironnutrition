
import { Divider, Input } from 'antd';
import { useState } from 'react';

const initialState = {
    name: '',
    image: '',
    calories: 0,
    servings: 0
}

// Iteration 4
function AddFoodForm(props) {

    const [ formData, setFormData ] = useState(initialState);

    const { addFood } = props;

    const handleFormInput = (identifierNameInput, value) => {
        setFormData( prevFormData => ({...prevFormData, [identifierNameInput]: value}))
    }

    const sendFood = (event) =>{
        event.preventDefault();
        addFood(formData);
        setFormData(initialState);
    }

  return (
    <form onSubmit={sendFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={(event) => handleFormInput('name', event.target.value)} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={undefined} type="text" onChange={(event) => handleFormInput('image', event.target.value)} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" onChange={(event) => handleFormInput('calories', event.target.value)} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" onChange={(event) => handleFormInput('servings', event.target.value)} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
