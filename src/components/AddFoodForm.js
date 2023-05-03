import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {

  const [showForm, setShowForm] = useState(false)

  return (
    <>
      {showForm ? (<form onSubmit={props.handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={props.inputStates.name} type="text" onChange={props.handleNameInput} />

        <label>Image</label>
        <Input value={props.inputStates.image} type='text' onChange={props.handleImageInput} />

        <label>Calories</label>
        <Input value={props.inputStates.calories} type='number' onChange={props.handleCaloriesInput}/>

        <label>Servings</label>
        <Input value={props.inputStates.servings} type='number' onChange={props.handleServingsInput}/>

        <button type="submit">Create</button>
      </form>) : null}
      
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add Food'}</button>
    </>
  );
}

export default AddFoodForm;
