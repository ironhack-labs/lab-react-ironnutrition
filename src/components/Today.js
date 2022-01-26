import React from 'react';
import {Title} from '../styles';

export const today = ({todayFoods}) => {
    return <div>
        <h2>Todays Foods</h2>
        <ul>
            {todayFoods.map(({quantity, name, calories}) => <li>{quantity} {name} - {calories * quantity} Cal</li>)}
        </ul>
        <Title>TotalColories: {todayFoods.reduce(
            (acc, {calories, quantity}) => {
                return acc += (calories * quantity)
            }, 0)
         } </Title>
    </div>
};