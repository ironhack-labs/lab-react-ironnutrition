import { useState } from 'react';


function AddFoodForm({ newFood, setNewFood, setFood, food }) {
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newFoodCalories, setNewFoodCalories] = useState('');
  const [newFoodServings, setNewFoodServings] = useState('');
  const [formVisible, setFormVisible] = useState(true);
  
  const toggleVisibility = () => {
    return setFormVisible(!formVisible);
  }

  function createButton(event) {
    event.preventDefault();
    const newItem = {
      name: newFoodName,
      image: newFoodImage,
      calories: newFoodCalories,
      servings: newFoodServings,
    };

    setFood([newItem, ...food]);
    setNewFoodName('');
    setNewFoodCalories('');
    setNewFoodImage('');
    setNewFoodServings('');

   

  }
  return (
    <>
    <button onClick={toggleVisibility}> {formVisible ? "Hide form" : "Show form"} </button>

    {formVisible && (
      <div className='addnewdiv' >
      <form onSubmit={createButton}>
      <h2>Add food item </h2>

        <div className='inputdiv'>
          <label>Name: </label>
          <input type="text" value={newFoodName} onChange={(event) => {setNewFoodName(event.target.value)}}/>
        </div>
       
       <div className='inputdiv'>
          <label>Image: </label>
          <input type="text" value={newFoodImage} onChange={(event) => {setNewFoodImage(event.target.value)}}/>
        </div>

        <div className='inputdiv'>
          <label>Calories: </label>
          <input type="number" value={newFoodCalories} onChange={(event) => {setNewFoodCalories(event.target.value)}}/>
        </div>

        <div className='inputdiv'>
          <label>Servings: </label>
          <input type="number" value={newFoodServings} onChange={(event) => {setNewFoodServings(event.target.value)}}/>
        </div>

        <button type="submit">Create</button>

      </form>
      </div>
    )}  
    </>
  );
}

export default AddFoodForm;