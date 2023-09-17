import { Input } from 'antd';
import React, { useState } from 'react';

function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [servings, setServings] = useState('');
    const [calories, setCalories] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const newFood = { name, calories, image, servings };
        props.addNewFood(newFood);

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return (
        <div>
            <h1>Add New Food</h1>
            <form onSubmit={handleSubmit} style={{ width: 580, height: 300, margin: 16, paddingLeft: 450 }}>
                <div>
                    <label htmlFor="">Name</label>
                    <Input
                        value={name}
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="">Image</label>
                    <Input
                        value={image}
                        type="text"
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="">Calories</label>
                    <Input
                        value={calories}
                        type="number"
                        onChange={(e) => {
                            setCalories(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="">Servings</label>
                    <Input
                        value={servings}
                        type="number"
                        onChange={(e) => {
                            setServings(e.target.value);
                        }}
                    />
                </div>

                <button style={{ marginTop: 16 }}>Add</button>
            </form>
        </div>
    );
}

export default AddFoodForm;