import React from 'react'

export default function SearchForm (props){
  return(
    <input className="input is-rounded" onChange={props.searchFood} name='query' type="text" placeholder="Search for your favorite food"></input>
  )
}