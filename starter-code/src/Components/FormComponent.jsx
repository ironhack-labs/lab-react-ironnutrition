import React from 'react'

const FormComponent = (props) => {
    
    const {name, calories, image, handleInputs, addFood} = props;
    return (
        <form onSubmit={addFood}>
            <input type='text' placeholder='name' value={name} onChange={handleInputs} name='name'></input>
            <input type='number' placeholder='calories' value={calories} onChange={handleInputs} name='calories'></input>
            <input type='text' placeholder='image' value={image} onChange={handleInputs} name='image'></input>
            <input type="submit" value="Add Food"/>
        </form>
    )
}

export default FormComponent;