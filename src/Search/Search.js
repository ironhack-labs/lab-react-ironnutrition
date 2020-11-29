import React, {useState} from 'react';
import foods from '../foods.json'

function Search(props){
    const [searchState, setSearch] = useState("");

    function handleChange(event){
        const value = event.target.value;
        const lowvalue = value.toLowerCase();
        setSearch(lowvalue);

        if (event !== ""){
            let newList = [];
            newList = foods.filter(oneFood =>
                  oneFood.name.toLowerCase().includes(searchState))
                 props.setApp(newList); 
                   }else{
                     props.setApp(foods)
                         }}

    return(
    <input
        type="text"
        placeholder="Search"
        value={searchState}
        onChange={handleChange}
  />)
}

export default Search;