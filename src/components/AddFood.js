import React, { useState } from "react"

function AddFood(props) {
    const [formShown, setformShown] = useState(false);

    const [foodName, setFoodName] = useState('');
    const [calCount, setCalCount] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const newFoodObject = { 'name': foodName, 'calories': calCount, 'image': image, 'quantity': 0 };
        props.handleAddFood(newFoodObject);
        setFoodName('');
        setCalCount(0);
        setImage('');
        setformShown(false);
    }
    return (
        <>
            <div className="add-food">
                <button onClick={() => setformShown(!formShown)}>
                    {formShown ? 'Hide Food Form' : 'Show Add Food Form'}
                </button>

                {formShown ? (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={foodName} onChange={(e) => setFoodName(e.target.value)} placeholder="Food name" />
                        <input type="number" name="calories" value={calCount} min="0" onChange={(e) => setCalCount(e.target.value)} placeholder="Calories (number)" />
                        <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image" />

                        <button>Add food</button>
                    </form>
                    ): null}
            </div>
        </>
    )
}

export default AddFood