import React, {useState } from 'react';

function AddFood(props) {

    const [isShown, setIsShown] = useState(false);

    const [foodName, setFoodName] = useState('');
    const [calCount, setCalCount] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const handleFoodNameChange = event => setFoodName(event.target.value);
    const handleCalCountChange = event => setCalCount(event.target.value);
    const handleImageUrlChange = event => setImageUrl(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();

        const newFoodObject = { 'name' : foodName, 'calories' : calCount, 'image' : imageUrl, 'quantity' : 1 };

        props.handleAddFood(newFoodObject);

        setFoodName('');
        setCalCount(0);
        setImageUrl('');

        setIsShown(false);
    }

    return(
        <div> 
            <button onClick={() => setIsShown(!isShown)}>
                {isShown ? 'Hide Add Food Form' : 'Show Add Food Form'}
            </button>
            {isShown ? (
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="foodName">Name</label>
                    <input type="text" name="" id="foodName" value={foodName} onChange={handleFoodNameChange}></input>
                    <label htmlFor="calCount">Number of calories</label>
                    <input type="text" name="" id="calCount" value={calCount} onChange={handleCalCountChange}></input>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" name="" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange}></input>
                </div>
                <button type="submit">Add food</button>
            </form>
            ): null}
        </div>

    );
}

export default AddFood;