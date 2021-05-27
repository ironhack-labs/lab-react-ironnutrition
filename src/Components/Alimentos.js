import React from 'react';

export const Alimentos = (props) => {
  const { comida } = props;
  console.log(comida);
  let suma = 0;
  if (comida.length > 0) {
    for (let index = 0; index < comida.length; index++) {
      suma += comida[index].calorias;
    }
  }

  return (
    <div className="container">
      <h1>Alimentos de hoy:</h1>
      <ul>
        {comida.map((e) => (
          <li style={{ listStyleType: 'circle' }}>
            {e.cantidad} - {e.nombre} {e.calorias}
          </li>
        ))}
      </ul>
      <h5>total: {suma} cal</h5>
    </div>
  );
};
