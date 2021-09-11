import React, {useState, useEffect} from "react";
import "./searchBar.css"

const SearchBar = (props) => {

    const [searchState, setSearchState] = useState('') 

    function handleSearch(event){
        setSearchState(event.target.value);
        
    } 

  useEffect(()=>{props.searchFood(searchState)},[searchState])  
    
    return(
        <form>
       
            <input type = 'text' name="search" value={searchState}  onChange={(e) => handleSearch(e)} />
        </form>
    )
}

export default SearchBar;