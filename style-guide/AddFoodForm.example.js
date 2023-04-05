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
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>
        Image
        <Input value={undefined} type="text" onChange={() => {}} />
      </label>
      {/* render antd <Input /> type="text" here */}

      <label>
        Calories
        <Input value={undefined} type="text" onChange={() => {}} />
      </label>
      {/* render antd <Input /> type="number" here */}

      <label>
        Servings
        <Input value={undefined} type="text" onChange={() => {}} />
      </label>
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
