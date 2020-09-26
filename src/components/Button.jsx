import React from 'react';

function Button(props, state) {
    return (
        <div className="Button">
            <button className="button is-info" onClick={props.funct}>{!props.buttonStatus ? 'Add Food' : 'Hide Form'}</button>
        </div>
    );
};

export default Button;