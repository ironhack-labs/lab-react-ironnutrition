import React, { useState } from 'react'


function AddFood(props) {

  const [isShown, setIsShown] = useState(false);


  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState(0);
  const [imgUrl, setImgUrl] = useState('');



  const handleSubmit = event => {
    event.preventDefault();

    const newFoodObject = { 'name': foodName, 'calories': calories, 'image': imgUrl, 'quantity': 1 };

    
    props.addFood(newFoodObject);


    setFoodName('');
    setCalories(0);
    setImgUrl('');


    setIsShown(false);
  }

  return (
    <div> 

      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide Food Form' : 'Show Add Food Form'}
      </button>

      {isShown ? (


        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="foodName">Name</label>
            <input type="text" name='' id='foodName' value={foodName} onChange={(e) => {setFoodName(e.target.value)}} />
         
          </div>
          <div>
            <label htmlFor="calories">Numer of calories</label>
            <input type="number" name='' id='calories' value={calories}  onChange={(e) => {setCalories(e.target.value)}} />
          </div>
      
          <div>
            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" name='' id='imageUrl' value={imgUrl}    onChange={(e) => {setImgUrl(e.target.value)}} />
         
          </div>
          <button type='submit'>Add Food</button>
        </form>

      ): null}

    </div>
  )
}

export default AddFood; 