import React from 'react';

const todaysFood = (props) => {
    return(
        <div className = "todaysFoodBox">
            <article>            
            <div>
                <p>Quantity: {props.quantity}</p>
                <p>Name: {props.name}</p>
            </div>
            </article>          

        </div>
    )
}

export default todaysFood;