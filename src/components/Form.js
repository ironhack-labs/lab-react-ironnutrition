import React, { useState } from 'react';
import FoodBox from './FoodBox';

const Form = () => {
  const [food, setFood] = useState({
    name: '',
    calories: '',
    image: '',
  });

  //B SE DEFINE EL LISTADO DE TODOS LOS COMENTARIOS DE LA APLICACION
  const [listadoFood, setListadoFood] = useState([]);

  const capturarDatos = (e) => {
    return setFood({
      ...food, //llamado spread operator, aquí se trae title y description. como reemplaza todos los datos, es importante mantener los datos anteriores.
      [e.target.name]: e.target.value,
    });
  };

  //CRUD
  //CREATE

  const agregarComida = (e) => {
    e.preventDefault();
    setListadoFood([...listadoFood, food]);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          agregarComida(event);
        }}
      >
        <h3>Food</h3>
        <input
          name="name"
          value={food.name}
          onChange={(event) => {
            capturarDatos(event);
          }}
        />

        <h3>Calories</h3>
        <input
          name="calories"
          value={food.calories}
          onChange={(event) => {
            capturarDatos(event);
          }}
        />

        <h3>ImageUrl</h3>
        <input
          name="image"
          value={food.image}
          onChange={(event) => {
            capturarDatos(event);
          }}
        />

        <button>Add food</button>
      </form>

      <h2>Listado de Comidas</h2>
      {listadoFood.map((elem) => {
        return (
          <>
            <FoodBox
              name={elem.name}
              calories={elem.calories}
              image={elem.image}
            />
          </>
        );
      })}
    </>
  );
};

export default Form;
