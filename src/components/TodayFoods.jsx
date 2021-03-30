import React from 'react';

const TodayFoods = () => {
  return (
    <div className="TodayFood">
      <h1>Today's Food</h1>

      {this.props.todayFoods.map((food, index) => (
        <div key={index}>
          {food.quantity} {food.name} = {food.quantity * food.calories} cal
        </div>
      ))}

      <p>
        Total:{' '}
        {this.props.foods.reduce(
          (acc, curr) => acc + Number(curr.quantity) * Number(curr.calories),
          0
        )}{' '}
        cal
      </p>
    </div>
  );
};

export default TodayFoods;
