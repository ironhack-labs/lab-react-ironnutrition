import React from 'react'

function Input({name, value , onChange, type}) {
    return (
        <input 
        name={name} 
        value={value} 
        onChange={onChange}
        type={type} />
            
        
    )
}

export default Input

