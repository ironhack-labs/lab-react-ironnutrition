import React from 'react';
import Button from './forms/components/Button';

function Menu(props) {
  const { foods } = props;
  const result = [];
  foods.reduce(function (res, value) {
    if (!res[value.name]) {
      res[value.name] = {
        quantity: value.quantity,
        name: value.name,
        calories: value.calories,
        image: value.image,
      };
      result.push(res[value.name]);
    }
    res[value.name].quantity += value.quantity;
    return res;
  }, {});
  const totalCalories = foods.reduce(
    (acc, cur) => acc + cur.quantity * cur.calories,
    0
  );
  return (
    <div>
      <h2 className="subtitle">Today's foods</h2>

      {foods?.map((food, index) => {
        return (
          <div key={`${food.name}-${index}`} className="columns is-vcentered">
            <span className="column">
              {food.quantity} {food.name} = {food.calories} cal
            </span>
            <Button
              type="button"
              value=""
              className={'is-danger ml-2'}
              icon="trash"
              onClick={() => {
                props.removeFoodMenu(food);
              }}
            >
              Delete
            </Button>
          </div>
        );
      })}
      {totalCalories !== 0 && <strong>Total: {totalCalories} calories</strong>}
    </div>
  );
}
export default Menu;
