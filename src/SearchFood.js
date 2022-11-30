import { Divider, Input } from 'antd';
import { useState, useEffect } from "react";

function SearchFood(props){    
    return(
        <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input type="text" onInput={props.handleSearch} />
        </>
    )
}

export default SearchFood;