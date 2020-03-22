import React from "react";

export const FormItem = ({
  id,
  label,
  name,
  type,
  formState,
  setFormState
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={name}
        value={formState[id]}
        onChange={e => setFormState({ ...formState, [id]: e.target.value })}
      />
    </>
  );
};
