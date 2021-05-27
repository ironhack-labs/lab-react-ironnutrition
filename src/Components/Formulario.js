import React, { useState } from 'react';

export const Formulario = (props) => {
  // ESTABLECER UNA NUEVA COMida
  const [newComida, setNewComida] = useState({
    name: '',
    calorias: 0,
    url: '',
  });
    
    const agregarComida = (e) => {
        e.preventDefault();
        console.log(newComida);
        if (!newComida.name.trim() || !newComida.calories.trim() || !newComida.image.trim() ) {
          
            return;
        }

        props.sendData(newComida);

        setNewComida({
            name: '',
            calorias: 0,
            url: '',
          })
        
        
    }
    

  const cambioInput = (event) => {
    setNewComida({
      ...newComida,
      [event.target.name]: event.target.value,
    });
    console.log(newComida);
  };
  return (
    <div>
      <form className="container" onSubmit={agregarComida}>
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            name="name"
            onChange={cambioInput}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Calorias</label>
          <input
            type="number"
            class="form-control"
            name="calories"
            onChange={cambioInput}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Url</label>
          <input
            type="text"
            class="form-control"
            name="image"
            onChange={cambioInput}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};
