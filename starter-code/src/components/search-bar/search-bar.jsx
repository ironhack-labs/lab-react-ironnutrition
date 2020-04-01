import React from 'react';
import './search-bar.scss';

export const SearchBar = ({myFoods, setFilteredList}) => {

	const search = (event) => {
		const value = event.target.value.toLowerCase();


		setFilteredList(myFoods.filter((e) => e.name.toLowerCase().includes(value)));


	};


	return (
		<>
			<input className={'input'}
				   type={'text'}
				   placeholder={'search by name'}
				   onChange={search}
			/>
		</>
	)


};