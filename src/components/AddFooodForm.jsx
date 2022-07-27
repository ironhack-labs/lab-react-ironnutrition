import { Divider, Input } from 'antd';
import {useState} from 'react'

function AddFoodForm(props) {

  const [show, setShow] = useState(true)

  return (
    <div>
      { show ? 
        <form>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input 
            value={undefined} 
            type="text" 
            onChange={() => {}} 
          />

          <label>Image</label>
          <Input 
            value={undefined} 
            type="text" 
            onChange={() => {}} 
          />

          <label>Calories</label>
          <Input 
            value={undefined} 
            type="number" 
            onChange={() => {}} 
          />

          <label>Servings</label>
          <Input 
            value={undefined} 
            type="number" 
            onChange={() => {}} 
          />

          <button type="submit" onClick={() => {
          }}>Create</button>

          <button onClick={() => setShow(false)}>Hide Form</button>
        </form> : null}

      
      
    </div>

    
  );
}

export default AddFoodForm;
