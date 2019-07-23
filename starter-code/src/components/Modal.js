import React from 'react';

function Modal(props) {
    return(
        <div className={`modal ${props.modal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <form onSubmit={props.addFood}>
                    <input onChange={props.getFoodName} className="input" type="text" placeholder="Food name" value={props.foodName}/>
                    <input onChange={props.getFoodCalorie} className="input" type="text" placeholder="Food calories" value={props.foodCalorie} />
                    <button className="button is-dark">Submit</button>
                </form>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={props.toggleModal}></button>
        </div>  
    )
};

export default Modal