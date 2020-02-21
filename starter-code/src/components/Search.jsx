import React from 'react'

export default function Search({handleChange}) {
    return (
        <div>
            <input type="text"
                onChange={handleChange}
            />
        </div>
    )
}
