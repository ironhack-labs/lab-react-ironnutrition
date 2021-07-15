import React, {useState} from 'react';



function AddFood(props){

    const [formState, setFormState] = useState({
        name: '',
        calories: '',
        image: '',
        quantity: ''

    })

    function handleChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value})
        console.log('this is the current formState ', formState)
    }


    function handleOnSubmit(event){
        event.preventDefault()
        const newFood = {formState}
        console.log(newFood)
        props.addFoodHandler(formState)
    }
    return(
        <div className="AddFood">
            <h3>Add New Food</h3>
            <form onSubmit={handleOnSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formState.name}
                onChange={handleChange}/>
                <label>Calories</label>
                <input type="text" name="calories" value={formState.calories} onChange={handleChange} />
                <label>Image</label>
                <input type="url" name="image" alt="foodImage" value={formState.image} onChange={handleChange} />
                <label>Quantity</label>
                <input type="number" name="quantity" value={formState.quantity} onChange={handleChange} />
                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}


export default AddFood;