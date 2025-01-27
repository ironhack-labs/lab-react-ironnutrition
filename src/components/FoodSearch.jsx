import "./FoodSearch.css";

function FoodSearch({ searchText, setSearchText }) {
  return (
    <div className="search-input">
      <label htmlFor="search">Search: </label>
      <input 
        type="text"
        name="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default FoodSearch
