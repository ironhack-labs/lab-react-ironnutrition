import React, { useState } from 'react';
import './App.css';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';
import { Formulario } from './components/Form';
import { Search } from './components/Search';
import { Alimentos } from './components/FoodsToday';

function App() {
  const [crear, setcrear] = useState(false);

  const [comida, setcomida] = useState(foods);

  const [agregarComida, setagregarComida] = useState([])

  const getData = (val) => {
    console.log(val);

    setcomida([...comida, val]);
    console.log(comida);
    setcrear(false);
  };

  const aux = (val) => {
    console.log(val);
    console.log("estoy app");
    const aux = foods.filter((e) => {
      let nombre = e.name.toLowerCase();

      if (nombre.indexOf(val.toLowerCase()) >= 0) {
    
        return true;
      } else {
        return false;
      }
    });
    

    setcomida(aux);
  };

  const agregar = (val) => {

    console.log(val);
    setagregarComida([
      ...agregarComida,
      val
    ])
    
  }

  return (
    <div className="container">
      <div className="mt-5 col-md-12">
        <Search busqueda={aux} />
      </div>
      <div className="row mt-5">
        <div className="col-md-6 App" style={{ border: 'solid 1px' }}>
          <button
            className="btn btn-dark mt-5 mb-5"
            onClick={() => setcrear(true)}
          >
            Agregar Comida
          </button>
          {comida.map((e) => (
            <FoodBox comida={e} agregar={agregar}/>
          ))}
        </div>

        <div className="col-md-6 mt-6">
          {crear ? <Formulario sendData={getData} /> : <Alimentos comida={ agregarComida}/>}
        </div>
      </div>
    </div>
  );
}

export default App;