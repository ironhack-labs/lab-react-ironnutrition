import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ todaysFood, deleteHandler }) => {
  return (
    <div>
      <h2 className="is-size-5">Today's Food</h2>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Item</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todaysFood.map((food, index) => (
            <tr key={index}>
              <td>
                {food.quantity} {food.name}
              </td>
              <td>{food.quantity * food.calories} calories</td>
              <td>
                <FontAwesomeIcon icon="trash" style={{ cursor: "pointer" }} onClick={() => deleteHandler(food.name)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Total ={" "}
        {todaysFood.reduce((acc, el) => {
          return (acc += el.calories * Number(el.quantity));
        }, 0)}{" "}
        calories
      </p>
    </div>
  );
};
