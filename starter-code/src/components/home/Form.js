import React from 'react'

const Form = ({ name, calories, image, onChange, handleSubmit })=>{
    return(
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={onChange} placeholder="Nombre de la comida" name="name">
            <br />
            </input>
            <input value={calories} onChange={onChange} placeholder="Número de calorías" name="calories">
            <br />
            </input>
            <input value={image} onChange={onChange} placeholder="Ingresa url de la imagen" name="image">
            <br />
            </input>
            <input value="Agregar comida" type="submit"></input>
        </form>
    )
}

export default Form