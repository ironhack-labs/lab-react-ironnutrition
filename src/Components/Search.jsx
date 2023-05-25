import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => {}} />
    </>
  );
}

export default Search;


import {useState} from 'react'

function FilterMovie(props) { 
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = e =>{
    setFirstLetter(e.target.value);
    props.filterMovies(e.target.value);
  };

  return (
    <div className="filter-movies">
        <label>Show movies by first letter:</label>
        <select value={firstLetter} onChange={handleSelect}>
            <option value="All">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
    </div>
  )
}

export default FilterMovie;