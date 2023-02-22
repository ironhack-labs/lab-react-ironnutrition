// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>name</label>
      <Input value={name} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={Calories} type="Number" onChange={() => {}} />

      <label>Servings</label>
      <Input value={Servings} type="Number" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
