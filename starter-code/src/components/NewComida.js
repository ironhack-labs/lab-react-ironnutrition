import React from 'react'

function BotonComida(props) {
    const { name, calories, image } = props.newFood
    const {handleInputNewComida, addNewFood} = props
    return (
        <form>
            <label>Name</label>
            <input type="text" onChange={handleInputNewComida} name="name" value={name} />
            <label>Calories</label>
            <input type="text" onChange={handleInputNewComida} name="calories" value={calories} />
            <label>Image</label>
            <input type="text" onChange={handleInputNewComida} name="image" value={image} />
            <button onClick={addNewFood}>
                Add new food
            </button>
        </form>
    )
}

export default BotonComida
