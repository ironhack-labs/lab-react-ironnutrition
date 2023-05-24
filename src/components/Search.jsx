

function Search(props) {

    const handleSearchChange = (event) => props.searchFood(event.target.value)
  return (
    <div>

        <h2>Busqueda</h2>
        <input type="text" name="search" onChange={handleSearchChange}></input>

    </div>
  )
}

export default Search;