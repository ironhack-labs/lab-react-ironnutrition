import React from 'react';

const Form = ({ data, formSubmit, formChange, showForm }) => (
  <form onSubmit={formSubmit}>
    <div className={showForm ? "field" : "hidden"}>
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" value={data.name} name="name" placeholder="e.g Birria" onChange={formChange} />
      </div>
    </div>

    <div className={showForm ? "field" : "hidden"}>
      <label className="label">Calories</label>
      <div className="control">
        <input className="input" type="number" value={data.calories} name="calories" placeholder="535" onChange={formChange} />
      </div>
    </div>

    <div className={showForm ? "file" : "hidden"}>
      <label className="file-label">
        <input className="file-input" type="file" name="resume" />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
          </span>
          <span className="file-label">
            Upload a file…
      </span>
        </span>
      </label>
    </div>
    <div className="field">
      <div className="control">
        <button className="button is-primary">{!showForm ? "Add Food" : "Submit"}</button>
      </div>
    </div>
  </form>
);

export default Form;