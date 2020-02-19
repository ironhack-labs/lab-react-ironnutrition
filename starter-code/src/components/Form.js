import React from 'react'

export const Form = ({name, cal, img, handle, AddFood}) => {
    return (
        <div>
    <h1>Add new food here</h1>
            <input 
                onChange={handle}
                type="text"
                name="name"
                placeholder="name"
                value={name}
            />
            <input 
                onChange={handle}
                type="number"
                name="calories"
                placeholder="calories"
                value={cal}
            />
            <input 
                onChange={handle}
                type="text"
                name="image"
                placeholder="url img"
                value={img}
            />
            <button onClick={AddFood}>Add</button>
            
        </div>
    )
}
