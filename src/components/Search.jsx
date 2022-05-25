import React, { useState } from 'react'

export default function Search(props) {
    const {filterFood} = props;
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        filterFood(e.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='Search products' className="input is-primary" value={searchText} onChange={handleSearch}/>
    </div>
  )
}
