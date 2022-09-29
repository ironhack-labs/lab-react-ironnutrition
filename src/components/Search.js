import {Divider,Input} from 'antd'
import {useState} from 'react'

const Search = (props) => {
    const handleSearch = (event) => {
        const matchArray = props.filteredArray.filter(element => {
            return element.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        props.searchFood(matchArray)
    }
    return(
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input type='text' onChange={handleSearch} />
        </>
    )
}

export default Search