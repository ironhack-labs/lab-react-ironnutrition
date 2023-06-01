import { Divider, Input } from 'antd';
import '../App.css'
// Iteration 4
function AddFoodForm(elem) {
    return (
      <div className="form">
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input type="text"/>  

      <label>Calories</label>
      <Input type="number"/>  

      <label>Servings</label>
      <Input type="number" /> 

      <button type="submit">Create</button>
            </form>
        </div>
  );
}

export default AddFoodForm;