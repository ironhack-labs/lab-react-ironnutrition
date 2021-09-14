import React from 'react';
import './TodaysItem.css';

const TodaysItem = ({ quantity, name, calories }) => {
    return (
        <li>{quantity} {name} = {calories} cal</li>
    )
}

export default TodaysItem;
