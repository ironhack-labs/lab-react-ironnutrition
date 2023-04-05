import { Divider, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        const newFood = {
            name,
            image: image === '' ? 'https://via.placeholder.com/118x60?text=FOOD' : image,
            calories: parseInt(calories),
            servings: parseInt(servings)
        };

        props.addFood(newFood);

        // reset the form to an empty string
        setName('');
        setImage('');
        setCalories('');
        setServings('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '50%', margin: 'auto' }}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={(event) => setName(event.target.value)} />

            <label>Image</label>
            <Input value={image} type='url' onChange={(event) => setImage(event.target.value)} />

            <label>Calories</label>
            <Input value={calories} type='number' min={0} onChange={(event) => setCalories(event.target.value)} />

            <label>Servings</label>
            <Input value={servings} type='number' min={0} onChange={(event) => setServings(event.target.value)} />

            <button type="submit" style={{ marginTop: '10px', padding: '10px', backgroundColor: '#4096FF', border: 'none', borderRadius: '10px', color: 'white', cursor: 'pointer' }}>ADD FOOD</button>
        </form>
    );
}

export default AddFoodForm;