import React from 'react';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content">{props.component}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      ></button>
    </div>
  );
}

export default Modal;
