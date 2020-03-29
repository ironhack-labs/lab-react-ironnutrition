// imrus
import React, { useState } from 'react';

// rfc
const Form = ({ setNewFood, newFood }) => {
  const [food, setFood] = useState({ name: "", calories: Number, image: "", quantity: 0 });
  console.log("Esto es food: ", food, "Esto es setFood: ", setFood)
  //console.log(useState) Solo detecta cuando se produce un cambio
  console.log("Esto es newFood: ", newFood, "Esto es setNewFood:", setNewFood)
  const handleChange = e => setFood({ ...food, [e.target.name]: e.target.value }) //Añade alimento a newFood: array de alimentos




  return (
    < form onSubmit={e => {
      e.preventDefault();    //Prevents screen from refreshing and losing all data submitted
      if (food.name === "") { //Si food.name está vacio devuelve return/rompe la posterior asignación. Se queda alli
        console.log('🐑 Error de formualario:por favor introduce todos los campos')
        return;
      }
      setNewFood([food, ...newFood]); //Cambié el orden para que el alimento añadido salga al principio

    }}
    >
      <input type="text" placeholder="name" name="name" onChange={e => handleChange(e)} />
      <input type="text" placeholder="calories" name="calories" onChange={e => handleChange(e)} />
      <input type="text" placeholder="image" name="image" onChange={e => handleChange(e)} />
      <button type="submit">Submit</button>
    </form >
  );
};

export default Form;

