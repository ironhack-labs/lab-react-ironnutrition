import React from "react";

const Form = ({ onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={onChange} placeholder="name" name="name" />
      <br />
      <input
        type='number'
        onChange={onChange}
        placeholder="calories"
        name="calories"
      />
      <br />
      <input type='text' onChange={onChange} placeholder="image" name="image" />
      <br />
      <input type='number' onChange={onChange} placeholder="quantity" name="quantity" />

      <input value="Enviar" type="submit" />
    </form>
  );
};

export default Form;







