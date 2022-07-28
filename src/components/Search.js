import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({name}){

  const[filter,SetFilter]= useState("")

  const handleSearch=(event)=>{
    console.log(even.target.value)
    SetFilter(event.target.value)
  }

 

    return (
        <>
          <Divider>Search</Divider>
    
          <label>Search</label>
          <Input value={name} type="text" onChange={handleSearch} />
        </>
      );
}
export default Search;