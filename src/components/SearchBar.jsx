import React from 'react'

export default function searchBar({searchInput, updateInput}) {

    return (
        <div>
            <input 
                className="input" 
                type="text" 
                name="searchBar" 
                id="searchBar" 
                placeholder="Pizza"
                onChange={event => updateInput(event.target.value)}
                value={searchInput}
            />
        </div>
    )
}

