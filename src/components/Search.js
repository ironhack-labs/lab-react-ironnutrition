import React from 'react';

export const Search = (props) => {
    const changeInput = (event) => {
    props.busqueda(event.target.value);
  };

  return (
    <div className="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Busqueda"
          onChange={changeInput}
          name="busqueda"
        />
      </div>
    </div>
  );
};