import React from 'react'

const AddFood = ({onSubmit, onChange, name, calories, image}) => (
    <form onSubmit={onSubmit}>
    <p>
        Name: 
        <input onChange={onChange} type="text" name="name" value={name}/>
    </p>
    <p>
        Calories:
        <input onChange={onChange} type="text" name="calories" value={calories}/>
    </p>
    <p>
        Image
        <input onChange={onChange} type="text" name="image" value={image}/>
    </p>
    <button type="submit">Add Food</button>
    </form>
)

export default AddFood