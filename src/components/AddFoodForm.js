import { Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm ({ addNewFood }) {

    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ calories, setCalories ] = useState(100);
    const [ servings, setServings ] = useState(1);

    const handleCreateBtn = (event) => {
        event.preventDefault();

        const newFood ={
            name,
            image,
            calories,
            servings
        }

        addNewFood(newFood);
        console.log(newFood);
    }

    const handleName = (event) => setName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value);

    return(
        <div>
            <h4>Add Food Entry</h4>
            <form onSubmit={handleCreateBtn}>
                <label> Name </label>
                <Input value={name} type="text" onChange={handleName} />

                <label> Image </label>
                <Input value={image} type="text" onChange={handleImage} />

                <label> Calories </label>
                <Input value={calories} type="number" onChange={handleCalories} />

                <label> Servings </label>
                <Input value={servings} type="number" onChange={handleServings} />

                <Button type='submit'> Create </Button>

            </form>
        </div>
    );
};

export default AddFoodForm;