import React from 'react'

export default function Searchbar({currentSearch, setCurrentSearch}) {

    const handleChange = ({target}) => {
        setCurrentSearch(target.value)
    }

    return(
        <div className="box">
            <input 
                type="text"
                className="input"
                onChange={handleChange}
                value={currentSearch}
            />
        </div>
    )
}