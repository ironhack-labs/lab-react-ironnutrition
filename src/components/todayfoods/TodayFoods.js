import React from 'react';

function TodayFoods(props) {
  const handleDelete = (_food) => {
    props.onDelete(_food);
  };
  const todayFoods = props.today.map((t) => {
    return (
      <li key={t.name}>
        {t.quantity} {t.name} = {t.quantity * t.calories} cal.{' '}
        <a
          className="delete is-medium"
          to="#"
          onClick={() => handleDelete(t)}
        ></a>
      </li>
    );
  });
  const totaCal = props.today.reduce(
    (total, food) => (total += food.quantity * food.calories),
    0
  );
  return (
    <div>
      <h1>Today's foods</h1>
      <ul>{todayFoods}</ul>
      <span>Total: {totaCal} cal.</span>
    </div>
  );
}

export default TodayFoods;
