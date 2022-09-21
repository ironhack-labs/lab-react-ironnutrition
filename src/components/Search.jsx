import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {
    const [searchedFood, setSearchedFood] = useState('')
    const { searchFood } = props;

    const handleInput = e => {
        setSearchedFood(e.target.value);
        searchFood(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchedFood} type="text" onChange={handleInput} />
    </>
  );
}

export default Search;
