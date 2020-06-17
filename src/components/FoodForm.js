import React from 'react'

export default function FoodForm(props) {
    return (
        <form onSubmit={props.onAdd}>
            <input name='name' type='text' placeholder='name'></input>
            <input name='calories' type='text' placeholder='calories'></input>
            <input name='imageSrc' type='text' placeholder='image src'></input>
            <button type={'submit'}>Add</button>
        </form>
    );
}