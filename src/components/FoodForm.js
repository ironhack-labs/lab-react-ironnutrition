import React from 'react';

const FoodForm = (props) => {
    return (
        <div>
            <input onChange={props.onChange} placeholder="Search for a food"></input>
        </div>
    )
};

export default FoodForm;