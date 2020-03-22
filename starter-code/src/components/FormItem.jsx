import React from "react";

const FormItem = ({ id, name, type, formState, setFormState }) => {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" id={id} type={type} placeholder={name} value={formState[id]} onChange={e => setFormState({ ...formState, [id]: e.target.value })} />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </p>
    </div>
  );
};

export default FormItem;
