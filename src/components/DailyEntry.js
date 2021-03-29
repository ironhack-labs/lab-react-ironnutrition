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
        <button className='btn btn-outline-dark mx-3 py-1 px-2' onClick={deleteFoodDaily}>x</button></p>)
}

export default DailyEntry;