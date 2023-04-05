function SearchForm(props) {

    const handleChange = (e) => {
      props.setQuery(e.target.value);
    }
  
    return (
      <div>
        Search a Food : 
        <input onChange={handleChange} type="search" />
      </div>
    );
  }

export default SearchForm