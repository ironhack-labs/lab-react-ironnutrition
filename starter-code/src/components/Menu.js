import React from 'react';

const Menu = (props) => {
    const totalCalories = props.menu.reduce((total, food) => total += food.amount * food.calories,0)
    return (

        <div className="">
           
            <h1 className="is-size-4">Today's foods</h1>
            <ul>
            {props.menu.map((food, index) => {
               return<li key={index} className="">{food.amount} {food.name} = {food.amount * food.calories} cal  
               <button className="delete has-background-danger has-margin-left-20-widescreen" onClick={props.deleteFood}></button></li>
            })}
            </ul>
            <p className=""> Total calories: {totalCalories} cal</p>
        </div>

    )

}

export default Menu;