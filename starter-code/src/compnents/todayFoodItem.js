import React  from 'react';
import bin from './bin.png';

function TodayFoodItem (props) {
    // debugger
    let cal= props.foodItem.quantity * props.foodItem.calories
    return (
        <li className="today-list-item" >
            <p>{props.foodItem.quantity} {props.foodItem.name} = {cal} cal</p>
            <img src={bin} alt="" id="bin" onClick= {()=>{
                props.deleteFoodItem(props.index)
            }}/>
        </li>
    )
}


export default TodayFoodItem;