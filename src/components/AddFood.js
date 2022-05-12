import React, { useState } from "react";


function AddFood (props) {
// console.log(props)
const [name, setName] = useState('')
const [calories, setCalories] = useState('')
const [image, setImage] = useState('https://i.imgur.com/ClxOafl.jpg')

const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
        name: name,
        calories: calories,
        image: image,
      };
    props.callBackAddFood(newFood) 

    setName('');
    setCalories('');
  }


return (
    <div>
    <form  onSubmit={handleSubmit}>
        Name:
        <input placeholder="of Food-Item" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        Calories:
        <input placeholder="0" type="number" name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
        Picture:
        <input placeholder="Add-Url" type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add Food</button>
      </form>
    </div>
)


}

export default AddFood;