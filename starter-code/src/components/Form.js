import React from "react";

const Form = ({onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input  onChange={onChange} placeholder="name" name="name" />
      <br />
      <input onChange={onChange} type="number"  placeholder="calories" name="calories" />
      <br />
      <input onChange={onChange} placeholder="image" name="image" />
      <br />
      <input onChange={onChange} type="number" placeholder="quantity" name="quantity" />
      <br />
      <input value="Enviar" type="submit" />
    </form>
  );
};

export default Form;



