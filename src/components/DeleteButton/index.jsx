import React from 'react';

const DeleteButton = ({onClick, name}) => {
    return (
        <div>
        <button onClick={() => onClick(name)}
        className="btn btn-danger">Delete</button>
            
        </div>
    );
};

export default DeleteButton;