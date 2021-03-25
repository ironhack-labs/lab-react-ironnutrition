import React from 'react';

const DailyEntry = (props) => {
    const {
        name,
        calories,
        quantity,
        deleteFoodDaily
    } = props;
    return (
        <p>{quantity} {name} = {calories} cal 
        <button onClick={deleteFoodDaily}>x</button></p>)
}

export default DailyEntry;