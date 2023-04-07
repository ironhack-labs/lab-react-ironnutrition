import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({ filterFoodHandler }) {
  const [char, setChar] = useState('');

  const handleSearch = (event) => {
    // Update the state variable 'char' with the current value of the search input
    setChar(event.target.value);
    // Call the 'filterFoodHandler' function passed down as props from the parent component, and pass in the current search query
    filterFoodHandler(event.target.value);
  };

  return (
    <div className="search-bar">
      {/* Ant Design 'Divider' component */}
      <>
        <Divider>Search</Divider>
        {/* Label for search input */}
        <label>Search</label>
        {/* Ant Design 'Input' component */}
        <Input
          // Set the value of the input to the current search query
          value={char}
          // Set the input type to 'text'
          type="text"
          // Call the 'handleSearch' function when the input value changes
          onChange={handleSearch}
          // Placeholder text for the search input
          placeholder="Search for foods"
        />
      </>
    </div>
  );
}

export default Search;
