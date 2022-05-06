import React, { useState } from 'react'

function AddFood(props) {

  const [isShown, setIsShown] = useState(false);

  // More peices of state to handle the form fields below.. starting as empty strings
  const [foodName, setFoodName] = useState('');
  const [calCount, setCalCount] = useState(0);
  const [imgUrl, setImgUrl] = useState('');
  
  const handleFoodNameChange = event => setFoodName(event.target.value);
  const handleCalCountChange = event => setCalCount(event.target.value);
  const handleImgUrlChange = event => setImgUrl(event.target.value);
  
  const handleSubmit = event => {
    event.preventDefault();

    //constructed our new food object out of our state.
    const newFoodObject = { 'name': foodName, 'calories': calCount, 'image': imgUrl, 'quantity': 1 };

    //Now we call the parent function we were provided as a prop in order to update the food array (with the newFoodObject we created from form submission). 
    props.handleAddFood(newFoodObject);

    //Now we "reset" our states..
    setFoodName('');
    setCalCount(0);
    setImgUrl('');

    //and then hide the form..
    setIsShown(false);
  }
  
  return (
    <div> 

      {/* We add anonmyous arrow function to change state of isShown each time clicked */}
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Food Form' : 'Show Add Food Form'}
      </button>

      {/* based on status of isShown? form either shows or is hidden */}
      {isShown ? (

        // when form submitting we call our handleSubmit
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="foodName">Name</label>
            <input type="text" name='' id='foodName' value={foodName} onChange={handleFoodNameChange}/>
          </div>
          <div>
            <label htmlFor="calCount">Numer of calories</label>
            <input type="number" name='' id='calCount' value={calCount} onChange={handleCalCountChange}/>
          </div>
          <div>
            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" name='' id='imageUrl' value={imgUrl} onChange={handleImgUrlChange}/>
          </div>
          <button type='submit'>Add Food</button>
        </form>

      ): null}
     
    </div>
  )
}

export default AddFood;