import React from 'react';

const ListDiet = (props) => {
    const handleDelete = () => {
      props.delete(props.index)
  }
  return (
    <li>
      {props.element.quantity} {props.element.name} = {props.element.calories} 
      <button onClick={() => handleDelete()}>Delete</button>
    </li>

    
  )
}

export default ListDiet;