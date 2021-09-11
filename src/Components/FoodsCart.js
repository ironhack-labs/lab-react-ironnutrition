import React from 'react';

const FoodsCart = ({foodsInfo}) => {

const showInfo = () => {
  return foodsInfo.map(food => (
     <li>{food.quantity}  {food.name} - {food.calories * food.quantity} Calories</li>
        )); 
}

const totalCalories = () => {
  return foodsInfo.reduce((total, amount) => {
        return total + amount.calories * amount.quantity;
  }, 0);
}
console.log(foodsInfo)
  return (
    <div>
    <h1>Today's foods</h1>
    {showInfo()}

       <ul>totalCalories: {totalCalories()}</ul>

       
       
        </div> 
  );
};

export default FoodsCart;
