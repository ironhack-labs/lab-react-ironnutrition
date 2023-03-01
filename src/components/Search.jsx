import { useState } from "react";

function FilterFoods(props) {
  const [firstLetter, setFirstLetter] = useState("");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);

    // console.log("selected", e.target.value);
    props.filterFoods(e.target.value);
  };

  return (
    <div className="FilterMovies">
      <label>Search for foods:</label>
      
        <input value={firstLetter} onChange={handleSelect} type="text" placeholder="Search.."/>
      
    </div>
  );
}

export default FilterFoods;
