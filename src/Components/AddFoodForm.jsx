import { Divider, Input } from 'antd';
import {useState} from 'react';
// Iteration 4
function AddFoodForm(props) {

const {food} = props;


    const handleNameImput = e => setName(e.target.value)
    const handleImageImput = e => setImage(e.target.value)
    const handleCaloriesImput = e => setCalories(e.target.value)
    const handleServingsImput = e => setServings(e.target.value)


    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name,
            image,
            calories,
            servings,
        };
        console.log(newFood)
        props.addNewFood(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" name="name" placeholder='Name' onChange={handleNameImput} />

      <label>Image</label>
      <Input value={image} type="text" name="image" placeholder='Image' onChange={handleImageImput} />

      <label>Calories</label>
      <Input value={calories} type="text" name="calories" placeholder='Calories' onChange={handleCaloriesImput} />

      <label>Servings</label>
      <Input value={servings} type="text" name="servings" placeholder='Servings' onChange={handleServingsImput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;