import React from 'react'
import {useState} from 'react'
import {Input} from 'antd'


export default function SearchBar({onSearch}) {

  return (
   <Input
   placeholder="Search foods here"
   onChange={(e)=>onSearch(e.target.value)}
   style={{margin: 16, width:250}}
    />
  )
}
