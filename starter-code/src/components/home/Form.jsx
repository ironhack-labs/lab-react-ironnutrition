import React from "react";

const Form = ({ name, calories, image, quantity, onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChange} placeholder="Tu comida favorita" name="name" />
      <br />
      <input onChange={onChange} placeholder="Calorias"
        name="calories"
      />
      <br />
      <input onChange={onChange} placeholder="URL de una foto" name="image" />
      <br />
      <input value="Enviar" type="submit" />
    </form>
  );
};

export default Form;