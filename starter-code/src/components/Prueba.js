import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const Prueba = () => {
  const { foods, setFooods } = useContext(DataContext);

  return (
    <div>
      {foods.map(e => (
        <li>{e.name}</li>
      ))}
    </div>
  );
};

export default Prueba;
