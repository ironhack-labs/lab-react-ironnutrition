function Search(props) {
    const handleInputChange = (event) => {
        props.setQueryProp(event.target.value)
    } 

    return (
        <div>
            <p>Search for stuff</p>
        <input type="text" onChange={handleInputChange} placeholder="search food!"/>
        </div>
    )
}

export default Search