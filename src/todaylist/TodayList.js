import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const TodayList = ({ name, calories, image, quantity, removeTodayFood }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    removeTodayFood({
      name,
      calories,
      image,
      quantity,
    });
  };

  return (
    <div className="notification is-info is-light">
      <button className="delete" onClick={handleDelete}></button>
      <p>
        <strong>
          {quantity} {name}
        </strong>
        <br />
        {calories} calories
      </p>
    </div>
  );
};

export default TodayList;
