import React from 'react'

export default function SearchFood({searchChange}){

    return (
    <div>
      <input type="search" name="search" onChange ={searchChange}/>
    </div>
  )
}
