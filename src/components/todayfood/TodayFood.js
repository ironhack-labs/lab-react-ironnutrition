import React from 'react';

import FoodBox from '../foodbox/FoodBox.js'



export default function TodayFood(props) {

   


    return (
        <div>
        <h4>Today's foods</h4>
        <p>In the console.log I see the correct data after clicking the + button </p>
        <p>but IDK how to pass data from the FoodBox component to the TodayFood component</p>
         <ul>
             <li>Amount: name: cal: </li>
         </ul>  
         <p>Total: </p> 
        </div>
    )
}

