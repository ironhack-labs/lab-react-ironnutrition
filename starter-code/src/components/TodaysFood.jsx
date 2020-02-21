import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ todaysFood, deleteHandler }) => {
  const totalCalories = todaysFood.reduce((acc, el) => {
    return (acc += el.calories * Number(el.quantity));
  }, 0);

  return (
    <div>
      <h2 className="is-size-5">Today's Food</h2>
      {!todaysFood.length ? (
        <p>Add the food you ate today.</p>
      ) : (
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Item</th>
              <th>Calories</th>
              <th className="has-text-centered">Action</th>
            </tr>
          </thead>
          <tbody>
            {todaysFood.map((food, index) => (
              <tr key={index}>
                <td>
                  {food.quantity} {food.name}
                </td>
                <td>{food.quantity * food.calories} calories</td>
                <td className="has-text-centered">
                  <FontAwesomeIcon icon="trash" style={{ cursor: "pointer" }} onClick={() => deleteHandler(food.name)} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="has-text-centered">
                Total of {totalCalories} calories
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
