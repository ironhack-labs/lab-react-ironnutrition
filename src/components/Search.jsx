import React from 'react'
import { Divider, Input } from 'antd';
import { useState } from 'react';


export const Search = ({foodArr, setFoodArr}) => {
    const [searchField, setSearchField] = useState('');

    const searchFunction = (event) => {
        setSearchField(event.target.value)
        // console.log(foodArr)
        const arrCopy = [...foodArr]
        const filteredArr = arrCopy.filter((elem) => elem.name.includes(event.target.value));
        setFoodArr(filteredArr)
    }

    return (
        <>
          <Divider>Search</Divider>
          <label>Search</label>
          <Input value={searchField} type="text" onChange={searchFunction} />
        </>
      );
}

export default Search;
