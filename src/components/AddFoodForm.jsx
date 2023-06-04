import { Input } from 'antd';
import { useState } from 'react';


function AddFoodForm (props) {

    const {AddNewFood} = props;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = (event) => { setName(event.target.value)}
    const handleImageInput = (event) => { setImage(event.target.value)}
    const handleCaloriesInput = (event) => { setCalories(event.target.value)}
    const handleServingsInput = (event) => { setServings(event.target.value)}

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {name, image, calories, servings}
        AddNewFood(newFood)
        console.log('NEW FOOD CREATED', newFood)
    }

    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input  type="text" value={name} onChange={handleNameInput} />

            <label htmlFor="image">Image</label>
            <Input  type="text" value={image} onChange={handleImageInput}/>

            <label htmlFor="calories">Calories</label>
            <Input  type="number" value={calories} onChange={handleCaloriesInput}/>

            <label htmlFor="servings">Servings</label>
            <Input  type="number" value={servings} onChange={handleServingsInput} />

            <button type="submit"> Create </button>
        </form>

        </div>

    )
}

export default AddFoodForm;