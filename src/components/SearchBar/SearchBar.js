import React from 'react';

function SearchBar(props) {

    

    const handleChange = ({ target }) => {
        props.setFoodSearch({
            
            [target.name]: target.value
        });

        
    };


  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={props.foodSearch.search}
        onChange={handleChange}
      />
    </div>
  );
}



export default SearchBar;
