import React from "react";

export default function File({ name, reference }) {
  return (
    <div className="field">
    <div className="file is-primary has-name is-centered">
      <label className="file-label">
        <input className="file-input" ref={reference} name={name} type="file" />
        <span className="file-cta">
          <span className="file-label">
            Info file…
          </span>
        </span>
        <span className="file-name">
          Please enter a picture
        </span>
      </label>
    </div>
  </div>
  );
}