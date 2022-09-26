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

    <label>Name</label>
    <Input name='name' id='name' placeholder='Name of the food' value={undefined} type="text" onChange={() => {}} />

    <label>Image</label>
    {/* render antd <Input /> type="text" here */}
    <Input name='image' id='image' placeholder='Select image URL of the food' value={undefined} type="text" onChange={() => {}} />

    <label>Calories</label>
    {/* render antd <Input /> type="number" here */}
    <Input name='calories' id='calories' placeholder='Number of calories' value={undefined} type="number" onChange={() => {}} />

    <label>Servings</label>
    {/* render antd <Input /> type="number" here */}
    <Input name='servings' id='servings' placeholder='Number of servings' value={undefined} type="number" onChange={() => {}} />

    <button type="submit">Create</button>
  </form>
  );
}

export default AddFoodForm;
