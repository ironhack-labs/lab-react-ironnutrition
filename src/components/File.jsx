import React from "react";

export default function File({ name, value, onChange, fileInput }) {
  return (
    <div className="field">
    <div className="file is-primary has-name is-centered">
      <label className="file-label">
        <input className="file-input" ref={fileInput} name={name} type="file" value={value} onChange={onChange} />
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