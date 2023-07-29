// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input} from 'antd';
import { useState } from 'react';

const initialState = {
  name: '',
  image: '',
  calories: 0,
  servings: 0
}

// Iteration 4
function AddFoodForm(props) {
  const {addFood} = props

  const [ formData, setFormData ] = useState(initialState)

  const handleFormInput = (identifierNameInput, value) => {
    setFormData(prevFormData => ({...prevFormData, [identifierNameInput]: value }))
  }

  const sendFood = (e) => {
    e.preventDefault();
    addFood(formData);
    setFormData()
  }

  return (
        <form onSubmit={sendFood}>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={undefined} type="text" onChange={(e) => handleFormInput('name', e.target.value)} />

          <label>Image</label>
          {/* render antd <Input /> type="text" here */}
          <Input value={undefined} type="text" onChange={(e) => handleFormInput('image', e.target.value)} />

          <label>Calories</label>
          {/* render antd <Input /> type="number" here */}
          <Input value={undefined} type="number" onChange={(e) => handleFormInput('calories', e.target.value)} />

          <label>Servings</label>
          {/* render antd <Input /> type="number" here */}
          <Input value={undefined} type="number" onChange={(e) => handleFormInput('servings', e.target.value)} />

          <button type="submit">Create</button>
        </form>

  );
}

export default AddFoodForm;
