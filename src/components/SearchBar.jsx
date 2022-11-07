import React from 'react'

function SearchBar({ filterText,
  onFilterTextChange }) {


    function onFilterTextChange(event) {
        console.log(event);
        onFilterTextChange(event.target.value);
    }
    return (
        <div>
            <form>
                <input
                    onChange={onFilterTextChange}
                    value={filterText}
                />
            </form>
        </div>
)
}

export default SearchBar;
