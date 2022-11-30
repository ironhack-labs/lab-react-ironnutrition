import React from 'react'

import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const handleInputChange = event => {
		props.setQueryProp(event.target.value)
	}

	return (
       <>
        <Divider>Search</Divider>
       <label>Search</label>
		<Input type="text" onChange={handleInputChange} />
        </>
	)
}

export default Search
