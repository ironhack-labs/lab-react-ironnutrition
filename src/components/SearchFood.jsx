import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ filterFoodList }) {
  const [foodNamePart, setFoodNamePart] = useState('');

  const foodSearch = (e) => {
    setFoodNamePart(e.target.value);

    filterFoodList(e.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={foodNamePart} type="text" onChange={foodSearch} />
    </>
  );
}

export default Search;
