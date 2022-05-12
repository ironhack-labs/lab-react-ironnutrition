import React, { useState } from 'react';


function SearchFood(props){

  const [searchFood, setSearchFood] = useState('')

  const handleSearch = event => {
    setSearchFood(event.target.value);
    props.handleSearch(event.target.value);
  }

  return (
    <div>
      <label htmlFor="">Search Foods</label>
      <input type="text" value={searchFood} onChange={handleSearch} />
    </div>
  )

}

export default SearchFood; 