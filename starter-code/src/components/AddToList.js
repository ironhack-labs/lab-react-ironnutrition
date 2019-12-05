import React from 'react';

function AddToListComponent (props){
    return(
        <li>
            {props.quantity} {props.name} - {props.calories} cal
        </li>
    )
};

export default AddToListComponent;