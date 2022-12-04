function SearchField(props) {
    const handleInputChange = event => {
		props.setQueryProp(event.target.value)
	}

	return (
			<input placeholder="Search Here!" id="search-input" type="text" onChange={handleInputChange} />
	)
}

export default SearchField