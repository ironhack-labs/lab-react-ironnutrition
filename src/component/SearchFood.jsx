import {useState} from 'react';
import { Divider, Input } from 'antd';



export default function SearchFood({searchInput, searchFoodFilter}) {
    //const {searchInput, searchFoodFilter} = props


    return (
        <div>
            <h1>Search Food</h1>
            <Input type='text' placeholder='Search food ...' value={searchInput} onChange={(e) => searchFoodFilter(e)} />

        </div>
    )
}
