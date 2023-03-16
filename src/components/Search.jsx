function Search(props) {
    const handleInputChange = event => {
		props.setQueryProp(event.target.value)
	}

	return (
        <div className="form-outline">
        Search<input type="search" id="form1" className="form-control" onChange={handleInputChange} />
        </div>
	)
}

export default Search