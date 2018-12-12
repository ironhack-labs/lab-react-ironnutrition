import React from 'react';

const NewFood =  ({element, cals, quant, totalCals}) => (
    <div>
        <div className="bold">{element}</div>
        <div>Calories: {cals}</div>
        <div>Quantity: {quant}</div>
        <div>Total Calories: {totalCals}</div>
    </div>

)

export default NewFood