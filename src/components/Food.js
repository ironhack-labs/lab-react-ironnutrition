import React from 'react';

export const Food = (props) => {
  const { food } = props;
  console.log(food);
  let suma = 0;
  if (food.length > 0) {
    for (let index = 0; index < food.length; index++) {
      suma += food[index].calorias;
    }
  }

  return (
    <div className="container">
      <h1>Alimentos de hoy:</h1>
      <ul>
        {food.map((e) => (
          <li style={{ listStyleType: 'circle' }}>
            {e.cantidad} - {e.nombre} {e.calorias}
          </li>
        ))}
      </ul>
      <h5>total: {suma} cal</h5>
    </div>
  );
};