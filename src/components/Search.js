import React from 'react'



// Iteration 5
function Search(props) {
    const handleInputChange = event => {
		props.setQueryProp(event.target.value)
	}

	return (
       <div>
       <label>Search</label>
		<input type="text" onChange={handleInputChange} />
        </div>
	)
}

export default Search
