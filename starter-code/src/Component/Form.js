import React from 'react';

const Form = ({handleChange,handleSubmit,form}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Watermelon"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Calories </label>
        <div className="control">
        <input
          name="kcal"
          value={form.kcal}
          onChange={handleChange}
          className="input"
          type="number"
          placeholder="Calories"
          step="1"
        />
      </div>
    </div>
      <div className="field">
        <label className="label">Image link</label>
        <div className="control">
          <input
            name="img"
            value={form.img}
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="https://www.ecured.cu/images/8/84/Kaneki.jpg"/>
        </div>
      </div>
      <a className="button is-Success" onClick={handleSubmit} >add</a>
    </form>
  </div>
);

export default Form;