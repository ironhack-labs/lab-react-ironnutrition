import { Divider, Input,Button } from 'antd';

function AddFoodForm({name,image,calories,servings}){
    return (
        <form>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={name} type="text" onChange={() => {}} />
    
          <label>Image</label>
          <Input value={image} type="text" onChange={() => {}} />
    
          <label>Calories</label>
          <Input value={calories} type="number" onChange={() => {}} />
    
          <label>Servings</label>
          <Input value={servings} type="number" onChange={() => {}} />
    
          <Button type="submit">Create</Button>
        </form>
      );
    }

export default AddFoodForm;