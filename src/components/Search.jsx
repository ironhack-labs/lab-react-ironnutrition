import React, { useState } from 'react'


function Search({ onSearchTextAdded }) {
    const [ inputText, setInputText ] = useState('')
    function handleOnChange(event) {
        const { value } = event.target;
        setInputText(value);
        onSearchTextAdded(value);
    }
  return (
    <div>
        <label>Search bar</label>
        <input type='text' value={inputText} onChange={handleOnChange}/>
        
    </div>
  )
}

export default Search