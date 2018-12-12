import React from 'react'

const FoodForm = ({onSubmit,onChange, name, calories, image})=> (
    <form onSubmit={onSubmit}>
        <p>
            Name:
            <input onChange={onChange} value={name} type="text" name="name"/>
        </p>
        <p>
            Calories:
            <input onChange={onChange} value={calories} type="text" name="calories"/>
        </p>
        <p>
            Image:
            <input onChange={onChange} value={image} type="text" name="image"/>
        </p>
        <button type="submit">Add food</button>
    </form>
)

export default FoodForm