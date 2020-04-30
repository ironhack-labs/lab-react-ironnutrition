import React from 'react';

const TodaysList = ({info, removeItem}) => {

    return (
    <div>
        <h1>Today's food</h1>
        <ul>
            {info.map((elem, idx) => {
                return (
                    <li id={idx}>
                        {`${elem.quantity} ${elem.name} - ${elem.calories * elem.quantity} cal`}
                        <button onClick={() => removeItem(idx)}> Remove</button> 
                    </li>
                )
            })}
        </ul>
        <p>Total: {info.reduce((a,b)=> a + (b.calories * b.quantity), 0)}</p>
    </div>
    );
}

export default TodaysList;