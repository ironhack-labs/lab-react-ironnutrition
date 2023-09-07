import React, { useState } from 'react'
import { Divider, Input} from "antd";

function Search(props) {
    return (
        <div className='Search'>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={props.search} type="text" onChange={(e) => props.setSearch(e.target.value)} />
        </div>
    )
}

export default Search