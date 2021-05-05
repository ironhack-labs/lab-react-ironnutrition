
import React from 'react';

const Search = ({searchFor}) => {

   

   const handleInputChange = e => {
        const value = e.target.value
        searchFor(value)
    }

        return (
            <>
                <label htmlFor="searchBox" >Search</label>
                <input type="text" id="searchbox" onChange={e => handleInputChange(e)} />
            </>
        )
}


export default Search