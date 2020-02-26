import React from 'react';

const FoodLi = ({ name, calories, quantity, deleteOne }) => {

    return (
        <li>
            {`${quantity} ${name} = ${calories} cal`} <button onClick={deleteOne}>Delete</button>
        </li>
    )
}

export default FoodLi
