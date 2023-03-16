import { Divider, Input } from 'antd';
import {useState} from 'react'


function AddFood(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState();
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = event => {

        event.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings
        }
        props.addFood(newFood)
           }

  return (

    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input type='text' value={image} onChange={(event) => {setImage(event.target.value)}}/>

      <label>Calories</label>
      <Input value={calories} type="text" onChange={(event) => {setCalories(event.target.value)}} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(event) => {setServings(event.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}


export default AddFood;