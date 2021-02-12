import React from "react";

function SearchBar(props){

  const [search, SetSearch] = React.useState({input: ""})
  //Para que se vaya actualizando el state mientras escribo
  const handleChange = ({ target }) => {
    SetSearch({input: target.value});
    props.filterFood(search.input)
    console.log(search.input)
};

  return(
    <div>
      <label>Search:</label>
      <input type="text" name="search" value={search.input} onChange={handleChange}></input>
    </div>
  )
}


export default SearchBar