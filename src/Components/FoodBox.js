import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const FoodBox = (props) => {
  const { comida } = props
  const [calorias, setcalorias] = useState({
    cantidad: 1,
    calorias: comida.calories,
    nombre:comida.name
    
  })

  const cambiarCalorias = (event) => {
    
    setcalorias({
      ...calorias,
      [event.target.name]: event.target.value,
    })
    console.log(calorias);
  }

  const agregarComida = () => {

    let suma = calorias.calorias * calorias.cantidad;
    console.log(suma);
    setcalorias({
      ...calorias,
      calorias:suma
    })

    props.agregar({
      cantidad: calorias.cantidad,
      calorias: suma,
      nombre:calorias.nombre
      
    })

  
    
  }
 
  return (
    <div className="mt-5">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={comida.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{comida.name}</strong> <br />
                <small>{comida.calories } cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={calorias.cantidad} name="cantidad" onChange={cambiarCalorias}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={ agregarComida}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
