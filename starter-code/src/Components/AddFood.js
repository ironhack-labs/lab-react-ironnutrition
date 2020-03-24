import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";

export const AddButton = () => {
  const [show, setShow] = useState(false);

  const showFields = () => {
    setShow(!show);
  };

  if (!show) {
    return (
      <div className="field">
        <button className="button is-primary" onClick={() => showFields()}>
          Add Food
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <button className="button is-danger" onClick={() => showFields()}>
            Cancel
          </button>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Primery Input"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Primery Input"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Primery Input"
            />
          </div>
        </div>
      </>
    );
  }
};
