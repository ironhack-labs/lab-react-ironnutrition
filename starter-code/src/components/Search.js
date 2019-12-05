import React from 'react';

function Search({ name, id, onChange }) {
	return (
		<div>
			<input
				type='text'
				id={id}
				className='input search-bar'
				name={name}
				placeholder='Search'
				onChange={onChange}
			/>
		</div>
	);
}

export default Search;
