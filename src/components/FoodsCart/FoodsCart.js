import React from 'react';

const FoodsCart = ({ foodsInfo }) => {

   const displayCartInfo = () => {
       return foodsInfo.map((food) => (
        <li>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
    ));
};
    const displayTotalCalories = () => {
        return foodsInfo.reduce((acc, food) => {
            return acc + (food.quantity * food.calories);
        }, 0);
};
    return(
        <div>
            <h2>Today's foods</h2>
            <ul>
            {displayCartInfo()}
            </ul>
            <p>
            {displayTotalCalories()}
            </p>
        </div>

    );

}

export default FoodsCart;
