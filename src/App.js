import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [comida, setComida] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: '',
  });

  const [listadoComidas, setListadoComidas] = useState([]);
  console.log(comida);

  //2. FUNCIONES DEL COMPONENTE.
  const generarComida = (event) => {
    console.log(event);
    return console.log('Hola comida');
  };

  const capturarDatos = (e) => {
    console.log(e);
    console.log(e.target.value);
    return setComida({
      ...comida,
      [e.target.name]: e.target.value,
    });
  };
  //CREAR
  const agregarComida = (e) => {
    e.preventDefault();
    setListadoComidas([...listadoComidas, comida]);
    setComida({
      name: '',
      calories: '',
      image: '',
      quantity: '',
    });
  };

  return (
    <>
      <button className="button is-info"  onClick={() => generarComida()}>
        Create a new food
      </button>
      <hr />
      <form className="box" style={{textAlign: 'center'}}
        onSubmit={(event) => {
          agregarComida(event);
        }}
      >
        <h3>Add a name of food</h3>
        <input
          name="name"
          value={comida.name}
          onChange={(event) => {
            capturarDatos(event);
          }}
        />
        <h3>Add number of calories</h3>
        <input
          name="calories"
          value={comida.calories}
          onChange={(event) => {
            capturarDatos(event);
          }}
        />
        <h3>Add an image</h3>
        <input
          name="image"
          value={comida.image}
          onChange={(event) => capturarDatos(event)}
        />
        <br />
        <br />
        <button className="button is-info">Submit</button>
      </form>
      <hr />
      {listadoComidas.map((elem) => {
        return (
          <>
            <FoodBox
              name={elem.name}
              calories={elem.calories}
              image={elem.image}
              quantity={elem.quantity}
            />
          </>
        );
      })}
      {foods.map((e) => {
        return (
          <FoodBox
            name={e.name}
            calories={e.calories}
            image={e.image}
            quantity={e.quantity}
          />
        );
      })}
    </>
  );
}

export default App;
