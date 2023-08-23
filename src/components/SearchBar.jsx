import { useState } from "react";

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
    props.searchFood(searchQuery);
  };


  return (
    <input type="text" value={searchQuery} onChange={handleInput} placeholder="search by food name"/>
  
  );
}
export default SearchBar;