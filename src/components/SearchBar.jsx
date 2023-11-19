// Import a use state hook
import { useState } from "react";

function SearchBar(props) {
  // Create a state variable to store the string from the input 
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the form input change
  const handleInput = (e) => {
    setSearchQuery(e.target.value); // PLEASE, WHEN U CAN, UPDATE STATE
    console.log("What the user has entered: ", e.target.value);
    console.log("Search query: ", searchQuery);
    handleSubmit(e);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent page reload on form submit
    e.preventDefault();
    // Do something with the search query string ...
    
    const newList = props.foodsArray.filter((elm) => {
      return elm.name.toLowerCase().includes(e.target.value.toLowerCase());
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