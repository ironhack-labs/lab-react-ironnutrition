import React from "react";

const Meal = ({ id, name, quantity, calories, handleDelete }) => (
  <li>{`${quantity} ${name} = ${calories * quantity} cal`}<a onClick={() => handleDelete(id)} className="delete">""</a></li>
);

export default Meal;
