import React from 'react';

// DATA
import foods from './foods.json';

// COMPONENTS
import { FoodBox } from './components/FoodBox';


export const App = () => {
    return (
        foods && foods.map((food, i) => {
            return <FoodBox key={i} food={food} />
        })
    )
}