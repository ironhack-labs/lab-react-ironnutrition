import React from 'react'

export default function AddButton(props){
  return(
    <button className="button is-primary is-light" onClick={props.toggleForm}>Toggle add control</button>
  )
}