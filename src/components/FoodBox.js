import React, { useState } from 'react';

export const FoodBox = (props) => {
  const { food } = props
  const [calorias, setcalorias] = useState({
    cantidad: 1,
    calorias: food.calorias,
    nombre:food.name
  })

  const cambiarCalorias = (event) => {

    setcalorias({
      ...calorias,
      [event.target.name]: event.target.value,
    })
    console.log(calorias);
  }

  const addFood = () => {

    let suma = calorias.calorias * calorias.cantidad;
    console.log(suma);


    props.agregar({
      cantidad: calorias.cantidad,
      calorias: suma,
      nombre:calorias.nombre

    })
    suma = 0
    setcalorias({
      cantidad: 1,
      calorias: food.calories,
      nombre:food.name

    })



  }

  return (
    <div className="mt-5">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories } cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={calorias.cantidad} name="cantidad" onChange={cambiarCalorias}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={ addFood}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};