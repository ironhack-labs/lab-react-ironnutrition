import React from 'react'
import { Input, Divider } from "antd"

export default function SearchBar({ search, onSearch }) {
  return (
    <>
      <Divider>Search</Divider>
      
      <label htmlFor="search">Search</label>
      <Input value={search} type="text" onChange={(e) => onSearch(e)} id="search" />
    </>
  )
}
