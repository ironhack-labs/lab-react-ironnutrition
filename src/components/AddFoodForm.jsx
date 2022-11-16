import { useState } from 'react'
import { Divider, Input } from 'antd';

function AddFoodForm({ createFood }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1);

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    };
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newFood = { name, image, calories, servings };
        createFood(newFood);

        setName('');
        setImage('');
        setCalories(1);
        setServings(1);
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <Divider>Add Food Entry</Divider>

                <label>Name</label>
                <Input type="text" name='name' onChange={handleName} />

                <label>Image</label>
                <Input type="text" name='image' onChange={handleImage} />

                <label>Calories</label>
                <Input type="text" name='calories' onChange={handleCalories} />

                <label>Servings</label>
                <Input type="number" name='servings' onChange={handleServings} />

                <button type="submit">Create</button>
            </form>
        </div>
    );

}
export default AddFoodForm