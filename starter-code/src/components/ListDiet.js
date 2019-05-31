import React from 'react';

const ListDiet = (props) => {
  return (
    <div className="columns">
      <div class="column">
      {props.element.name}
      </div>
    </div>

  )
}

export default ListDiet;