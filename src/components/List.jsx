import React from 'react';

const List = (props) => {
  const totalCalories = props.elementList.reduce(
    (acum, value) => parseInt(value.calories * value.quantity) + acum,
    0
  );
  return (
    <div className="column">
      <h3 className="title is-4">Today´s Food</h3>
      <div className="content">
        <ul className="block-list is-small is-outlined is-success has-text-left">
          {props.elementList.map((element, i) => {
            return (
              <li key={i}>
                {element.quantity} {element.name} = {element.calories * element.quantity} cal
                <button
                  onClick={() => props.delete(element)}
                  className="ml-5 is-pulled-right"
                >
                  <i
                    className="fa fa-trash has-text-danger"
                    aria-hidden="true"
                  ></i>
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          Total: <span>{totalCalories}</span> cal
        </div>
      </div>
    </div>
  );
};

export default List;
