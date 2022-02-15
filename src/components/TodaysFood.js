import React, { useState } from 'react';

function TodaysFood(props) {
    return(
        <div>
        <h1><strong>Today's foods</strong></h1>
        <h4>Total: {props.totalCalories}cal</h4>
        </div>
    )
}

export default TodaysFood;