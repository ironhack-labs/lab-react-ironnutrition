import { Divider, Input } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'
import styled from 'styled-components'

const Search = ({ listFilter }) => {
  const [foodSearch, setFoodSearch] = useState('')

  const searchHandler = (ev) => {
    setFoodSearch(ev.target.value)
    listFilter(ev.target.value)
  }
  return (
    <>
      <Divider>Search</Divider>
      <SearchWrapper>
        <label>Search</label>
        <Input placeholder="Enter a food Name" value={foodSearch} type="text" onChange={searchHandler} />
      </SearchWrapper>
    </>
  )
}

export default Search

const SearchWrapper = styled.div`
  max-width: 40%;
  margin: 0 auto;
`
