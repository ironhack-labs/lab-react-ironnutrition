import { Divider, Input } from 'antd';
import { useState } from 'react';

function SearchFood(props) {

    const [filter,setFilter]=useState("")

    function handleFilterInput(e){
        setFilter(e.target.value)
        props.filter(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={filter} type="text" onChange={handleFilterInput} />
    </>
  );
}

export default SearchFood;
