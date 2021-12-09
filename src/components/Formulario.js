import Food from './Food';
import React, { useState } from 'react';

const Formulario = () => {
  const [datos, setDatos] = useState({
    name: '',
    calories: '',
    image: '',
    quantity:""
  });

  console.log(datos);

  const [datosGenerados, setDatosGenerados] = useState([]);

  const capturaDatos = (evento) => {
    console.log(evento);
    console.log(evento.target.value);
    return setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  };

  console.log(datosGenerados);

  const generaDatos = (evento) => {
    evento.preventDefault();

    setDatosGenerados([...datosGenerados, datos]);

    setDatos({
        name: '',
        calories: '',
        image: '',
        quantity:""
    });
  };

  return (
    <>
      <div className="container">
        <h1>Formulario</h1>
        <form
          onSubmit={(evento) => {
            generaDatos(evento);
          }}
        >
          <label>name:</label>
          <input
            name="name"
            value={datos.name}
            onChange={(event) => {
              capturaDatos(event);
            }}
          />
          <br />
          <label>Numero de calories:</label>
          <input
            name="calories"
            value={datos.calories}
            onChange={(event) => {
              capturaDatos(event);
            }}
          />
          <br />
          <label>image:</label>
          <input
            name="image"
            value={datos.image}
            onChange={(event) => {
              capturaDatos(event);
            }}
          />
          <br />
          <br />
          <button>New Food</button>
        </form>

        <h1>Datos Generados</h1>

        {
        
          datosGenerados.map((info) => {
          return (
            <>
           {/*  <div style={{display:'flex', flexDirection:'column'}}>
            <Food> */}
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <article className="row g-0">
                  <div className="col-md-4">
                    <img key={info.image} className="img-fluid rounded-start" src={info.image} />
                  </div>
                  <div className="col-md-8">
                    <p>
                      <strong>{info.name}</strong> <br />
                      <small>{info.calories}</small>
                    </p>

                    <input className="input" type="number" value="1" />

                    <button className="btn btn-info">+</button>
                  </div>
                </article>
              </div>
           {/*  </Food>
            </div> */}
            </>
          );
        })
        }
      </div>
    </>
  );
};


export default Formulario;
