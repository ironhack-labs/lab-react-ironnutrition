import React from 'react';
import { useState } from 'react';

const Search=({setFood,foods})=>{

const [search, setSearch] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
  
    
  }

  const searchFilter=(e)=>{
    const newSearch=e.target.value
    setSearch(newSearch)
    const searchResult=foods.filter(food=>food.name.toLowerCase().includes(newSearch.toLowerCase()))
    setFood(searchResult)
  }

  return(
    <>
<form onSubmit={handleSubmit}>
      <input type="text" name="search"  value={search} onChange={searchFilter}/>
    </form>
    </>
  )
}


export default Search;