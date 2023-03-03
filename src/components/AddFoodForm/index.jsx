import { useState } from 'react';
import { Form, Input, Button } from 'antd';

function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
        name: name,
        image: image,
        calories: calories,
        servings: servings,
    };
    props.addFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Add Food</h2>
        <div>
        <label>Name:</label>
        <Input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
        <label>Image:</label>
        <Input
            value={image}
            type="text"
            onChange={(e) => setImage(e.target.value)}
        />
        </div>
        <div>
        <label>Calories:</label>
        <Input
            value={calories}
            type="text"
            onChange={(e) => setCalories(e.target.value)}
        />
        </div>
        <div>
        <label>Servings:</label>
        <Input
            value={servings}
            type="text"
            onChange={(e) => setServings(e.target.value)}
        />
        </div>
        <Button type="primary" htmlType="submit">
        Add
        </Button>
    </form>
    );
}

export default AddFoodForm;