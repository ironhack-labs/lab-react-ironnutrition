import React from 'react';

const List = (props) => {
  return (
    <div className="content">
      <ul className="block-list is-small is-outlined is-success has-text-left">
        {props.elementList.map((element, i) => {
          return (
            <li key={i}>
              {element.quantity} {element.name} = {element.calories * element.quantity} cal
              <button name={element.name} id={element.calories * element.quantity} onClick={props.delete} className="ml-5 is-pulled-right">
                <i
                  className="fa fa-trash has-text-danger"
                  aria-hidden="true"
                ></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
