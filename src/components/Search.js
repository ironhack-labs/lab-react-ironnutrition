import React from 'react'
import { Input } from 'antd';

function SearchBar(props) {
    const handleInput = event => {
		props.setQueryProp(event.target.value)
	}

	return (
    <div className='SearchBar'>
       <span>Search</span>
		<Input type="text" onChange={handleInput} />
    </div>
	)
}

export default SearchBar