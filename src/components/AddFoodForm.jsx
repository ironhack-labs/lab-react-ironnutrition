import { Divider, Input } from 'antd';
import { useState } from 'react';
// import { v4 as uuid } from "uuid";

function AddFoodForm(props) {
    
    const [allValues, setAllValues] = useState({
        name: '',
        calories: '',
        image: '',
        servings: '',
    });

    const {name, calories, image, servings} =  allValues

    const {foodsList, setFoodsList} = props
    const { setStableList } = props

    const changeHandler = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
     }

    const hendleSubmit = (e) => {
        e.preventDefault();
        const newFood = allValues
        const newFoodsList = [...foodsList, newFood]
        setFoodsList(newFoodsList)
        setStableList(newFoodsList)
        setAllValues({
            name: '',
            calories: '',
            image: '',
            servings: '',
        })        

    }


  return (
    <form onSubmit = {hendleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} name='name' type="text" onChange={changeHandler} />

      <label>Image</label>
      <Input value={image} name='image' type="text" onChange={changeHandler} />
      
      <label>Calories</label>
      <Input value={calories} name='calories' type="nuber" onChange={changeHandler} />
      
      <label>Servings</label>
      <Input value={servings} name='servings' type="number" onChange={changeHandler} />
      
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;