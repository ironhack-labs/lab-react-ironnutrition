/* eslint-disable react/prop-types */
import { Divider, Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

// Iteration 5
function OnSearch( { showSearchResult } ) {
	const [searchQuery, setSearchQuery] = useState( [] );
	const handleSearchQuery = ( e ) => {
		setSearchQuery( e.target.value );
		showSearchResult( e.target.value );
	};

	return (
		<>
			<Divider>Search</Divider>

			<Search
				placeholder='Search for Food'
				onChange={handleSearchQuery}
				value={searchQuery}
			/>
		</>
	);
}

export default OnSearch;
