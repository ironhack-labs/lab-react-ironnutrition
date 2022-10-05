import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
