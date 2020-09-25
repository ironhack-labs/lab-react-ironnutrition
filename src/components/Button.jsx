import React from 'react';

function Button(props, state) {
    return (
        <div className="Button">
            {!props.buttonStatus && <button onClick={props.funct}>Add Food</button>}
        </div>
    );
};

export default Button;