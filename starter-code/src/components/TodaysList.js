import React from 'react';

const TodaysList = ({info, removeItem}) => {

    return (
    <div className="todays-list">
        <h1 className="todays-list__title">Today's food</h1>
        <ul className="todays-list__list">
            {info.map((elem, idx) => {
                return (
                    <li className="todays-list__item" id={idx}>
                        <p>
                        {`${elem.quantity} ${elem.name} - ${elem.calories} cal`}
                        </p>
                        <button className="button is-small is-danger" onClick={() => removeItem(idx)}> Remove</button> 
                    </li>
                )
            })}
        </ul>
        <p className="todays-list__total">Total: {info.reduce((a,b)=> a + (b.calories), 0)}</p>
    </div>
    );
}

export default TodaysList;