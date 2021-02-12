import React from "react";

function SearchBar(props){

  const [search, SetSearch] = React.useState({input: ""})
  //Para que se vaya actualizando el state mientras escribo
 const handleChange = ({ target }) => {
    SetSearch({input: target.value});
    props.filterFood(target.value)
    console.log(target.value)
};

  return(
    <div>
      <label>Search:</label>
      <input type="text" name="search" value={search.input} onChange={handleChange}></input>
    </div>
  )
}


export default SearchBar