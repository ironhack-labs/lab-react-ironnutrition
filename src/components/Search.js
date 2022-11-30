

// Iteration 5
function Search(props) {
    const handleInputChange = event => {
		props.setQueryProp(event.target.value)

  return (



      <input type="text" onChange={handleInputChange} />

  );
}
}



export default Search;
