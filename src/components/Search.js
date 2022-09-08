import { Input } from 'antd'
import React from 'react'
import { Divider } from 'antd'

const Search = (props) => {

    return (
        <>
            <Divider>Search</Divider>
            <Input
                onChange={(e) => props.filterFoods(e.target.value)}
            />
        </>
    )
}

export default Search