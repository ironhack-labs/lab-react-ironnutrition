import React from 'react'
import { useState } from 'react';
function AddFoodForm({setFood, food}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
function addOneFood(event){
    event.preventDefault();
    const newFood = {
        name,
        image,
        calories,
        servings
    }
    setFood([newFood, ...food])

}
  return (
    <div>
       <form onSubmit={addOneFood}>
        

<label>name:
<input value={name} type="text" onChange={(event) => setName(event.target.value)} />
</label>
<label>image:
<input value={image} type="text" onChange={(event) => setImage(event.target.value)} />
</label>
<label>calories:
<input value={calories} type="number" onChange={(event) => setCalories(event.target.value)} />
</label>
<label>servings:
<input value={servings} type="number" onChange={(event) => setServings(event.target.value)} />
</label>
<button>
    Submit
</button>
       </form>
        </div>
  )
}

export default AddFoodForm