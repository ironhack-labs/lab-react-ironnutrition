import { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  const [foodName, setFoodName] = useState("");
 
  const handleSelect = e => {
    setFoodName(e.target.value);
 
    console.log("selected", e.target.value);
    props.searchFoods(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={foodName} type="text" onChange={handleSelect} />
    </>
  );
}

export default Search;
