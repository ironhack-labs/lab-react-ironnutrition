// Import a use state hook
import { useState } from "react";

function SearchBar(props) {
  // Create a state variable to store the string from the input 
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the form input change
  const handleInput = (e) => {
    setSearchQuery(e.target.value);
    handleSubmit(e);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent page reload on form submit
    e.preventDefault();
    // Do something with the search query string ...
    console.log("Search query: ", searchQuery);
    const newList = props.foodsArray.filter((elm) => {
      return elm.name.toLowerCase().includes(searchQuery);
    });
    if(newList.length === 0) {
      props.callbackToSetNoResultsDiv(
      <div>Pas de résultats</div>)
    }
    props.callbackToSetFoods(newList);
    
    
  };

  return (
    <form>
      <label>Search</label>
      <input type="text" value={searchQuery} onChange={handleInput} />
    </form>
  )
}

export default SearchBar;