import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function AddFood({ addFood, toggleFormDisplay }) {
  //useState ponemos el valor inicial de nuestra variable
  //el primero es su valor "inputs", y la segunda es su funcion para modificarla o actualizarla "setInputs"
  const [inputs, setInputs] = useState({ name: '', calories: 0, image: '' });

  // documentacion para formularios https://es.reactjs.org/docs/forms.html
  // https://bluuweb.github.io/react/formularios/


  // acordarse siempre que lanzamos eventos (e)
  //los inputs en el formulario necesitan ser targueteados igualamos name a value. No tenemos ID.
  function handleInputChange(e) {
    const newInputs = { ...inputs };
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
  }


  //esto ira en onSubmit para enviar los datos
  //e.preventDefault() para evitar la peticion 
  function enviarDatos(e) {
    e.preventDefault();
    addFood(inputs);
    toggleFormDisplay();
    toast("New Food added")
  }

  


  //formulario basico recogido de la documentacion anteriormente mencionada
  return (
    <>
    <form className="row m-2" onSubmit={enviarDatos}>
      <label>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="FOOD NAME"
            className="input"
            onChange={handleInputChange}
            name="name"
            value={inputs.name}
          ></input>
        </div>
      </label>
      <label>
        <div className="col-md-3">
          <input
            type="number"
            placeholder="CALORIES"
            className="input"
            onChange={handleInputChange}
            name="calories"
            value={inputs.calories}
          ></input>
        </div>
      </label>
      <label>
        <div className="col-md-3">
          <input
            type="url"
            placeholder="URL IMAGE"
            className="input"
            onChange={handleInputChange}
            name="image"
            value={inputs.image}
          ></input>
        </div>
      </label>

      <button type="submit" className="button is-info">
        Enviar
      </button>
      
    </form>
    <Toaster />
    </>
  );
}

export default AddFood;
