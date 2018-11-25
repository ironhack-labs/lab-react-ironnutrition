import React from 'react';

const TodayChild = ({index,foods,onClick}) => (
    <div>
        <li>{foods[index].quantity} {foods[index].name}: {(foods[index].calories)*foods[index].quantity} calories
        <button onClick={e => onClick(e,index)}> Delete </button>
        </li>

        {/*<i className="fa fa-trash" onClick={e => onClick(e,index)}/>*/}
    </div>

);

export default TodayChild;