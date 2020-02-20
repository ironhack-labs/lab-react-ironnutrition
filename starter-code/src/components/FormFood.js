import React from 'react'

const FormFood = (props) => {
    return (
        <form onSubmit = {props.addElement}>
            <input onChange={props.handleInput} name="name" placeholder="Nombre" type="text"/>
            <input onChange={props.handleInput} name="image" placeholder="Imagen URL" type="text"/>
            <input onChange={props.handleInput} name="calories" placeholder="Calorias" type="number"/>
            <input onChange={props.handleInput} name="quantity" placeholder="Cantidad" type="number"/>
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default FormFood
