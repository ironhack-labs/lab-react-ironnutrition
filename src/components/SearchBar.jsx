// Import a use state hook
import { useState } from "react";
import foodsJson from "../foods.json"


function SearchBar({onSearch}) {
  // Create a state variable to store the string from the input 
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the form input change
  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent page reload on form submit
    e.preventDefault();
    // Do something with the search query string ...
    console.log("Search query: ", searchQuery); 
    if (!searchQuery){
      onSearch(foodsJson)
      return
    }
    onSearch(prev => 
       prev.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) )
      
    )
  };

  return (
    <form className="search-style" onSubmit={handleSubmit}>
      <input style={{width:'500px'} } type="text" value={searchQuery} onChange={handleInput} />
      
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar;