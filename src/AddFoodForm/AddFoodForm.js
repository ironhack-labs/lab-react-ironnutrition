import React, {useState} from 'react';

function AddFoodForm (props){
    const initialFormState = {
        name: '',
        calories: 0,
        image: '',
    }

    const [newFoodState, setNewFood] = useState(initialFormState);

    function handleClick(event){
        event.preventDefault();
        setNewFood( initialFormState )
        const copyFood = [...props.addFood]
        copyFood.push(newFoodState);
        props.attFood(copyFood)
    }

    function handleInputChange(event){
        const {name, value} = event.target;
        setNewFood({
            ...newFoodState, 
            [name]: value,
        })
    }
    

    return(
        <form>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={newFoodState.name}
                onChange={handleInputChange}
                />
            <label htmlFor="calories">Calories:</label>
            <input
                type='number'
                name="calories"
                onChange={handleInputChange} 
                value={newFoodState.calories}
                />
            <label htmlFor="image">Image:</label>
            <input
                type="text"
                name="image"
                onChange={handleInputChange}
                value={newFoodState.image}
                />
             <button onClick={handleClick}>Add New Food</button>
        </form>
    );
}

export default AddFoodForm;