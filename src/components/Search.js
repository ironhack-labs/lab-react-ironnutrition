import React from 'react';

export const Search = (props) => {
    const cambioInput = (event) => {
    console.log("estoy search");
    props.busqueda(event.target.value);
  };

  return (
    <div className="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Busqueda"
          onChange={cambioInput}
          name="busqueda"
        />
      </div>
    </div>
  );
};