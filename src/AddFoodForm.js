import { Divider, Input } from 'antd';
import React, { useState } from 'react';

function AddFoodForm({ setAllFoods }) {
    const [name, setName] = React.useState('')
    const [image, setImage] = React.useState('')
    const [calories, setCalories] = React.useState(0)
    const [servings, setServings] = React.useState(0)
    const [form, setForm] = useState(false)

    function handleFoods(ev) {
        debugger;
        ev.preventDefault();
        setAllFoods((prevFoods) => [
            ...prevFoods,
            { name, image, calories, servings }
        ]);

        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
        setForm(false)

    }


    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide Form' : 'Show Form'}
            </button>
            {showForm && (
                <form>
                    <Divider>Add Food Entry</Divider>
                    <label>Name</label>
                    {<Input
                        value={name}
                        type="text"
                        onChange={(ev) => setName(ev.target.value)} />}
                    <label>Image</label>
                    {<Input
                        type="file"
                        onChange={(ev) => setImage(ev.target.files[0])} />}
                    <label>Calories</label>
                    {<Input
                        value={calories}
                        type="number"
                        onChange={(ev) => setCalories(ev.target.value)} />}
                    <label>Servings</label>
                    {<Input
                        value={servings}
                        type="number"
                        onChange={(ev) => setServings(ev.target.value)}
                    />
                    }
                    <input type="button" value="create" onClick={handleFoods} />
                </form>
        </div>
    )

export default AddFoodForm