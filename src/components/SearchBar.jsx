import React from 'react'

export default function SearchBar({searchFood}) {

  return (
    <form className="search-bar">
        <input type="text" name="name" placeholder="Search..." onChange={searchFood}></input>
    </form>
  )
}
