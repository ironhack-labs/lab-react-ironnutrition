import {Input} from 'antd';
import foods from '../foods.json';
import {useState, useEffect} from 'react';

const SearchBox = () => {
 searchFor ((value) => {
 })
    return(
        <div className="SearchBox">
        <Input onkeyup={searchFor()} placeholder="Search for..."/>
        </div>
    )
}
export default SearchBox;