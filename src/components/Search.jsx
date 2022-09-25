// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';
// Iteration 5
function Search(props) {
    const { searchFood } = props;
    const [searchedFood,setsearchedFood]=useState('');
const handelInput = e =>{

setsearchedFood(e.target.value)
searchFood(e.target.value)
}


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchedFood} type="text" onChange={handelInput} />
    </>
  );
}

export default Search;
