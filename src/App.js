import React,{useState} from 'react';
import './App.css';

import { FoodBox } from './components/FoodBox';
import foods from './foods.json';
import { Form } from './components/Form';
import { Search } from './components/Search';
import { Food } from './components/Food';

function App() {
  const [create, setCreate] = useState(false);

  const [food, setfood] = useState(foods);

  const [addFood, setAddFood] = useState([])

  const getData = (val) => {
    // console.log(val);

    setfood([...food, val]);
    // console.log(food);
    setCreate(false);
  };

  const prueba = (val) => {
    // console.log(val);
    // console.log("estoy app");
    const prueba = foods.filter((e) => {
      let nombre = e.name.toLowerCase();

      if (nombre.indexOf(val.toLowerCase()) >= 0) {

        return true;
      } else {
        return false;
      }
    });


    setfood(prueba);
  };

  const agregar = (val) => {

    // console.log(val);
    setAddFood([
      ...addFood,
      val
    ])

  }
  return(
    <div className="container">
    <div className="mt-5 col-md-12">
      <Search busqueda={prueba} />
    </div>
    <div className="row mt-5">
      <div className="col-md-6 App" style={{ border: 'solid 1px' }}>
        <button
          className="btn btn-dark mt-5 mb-5"
          onClick={() => setCreate(true)}
        >
          Agregar food
        </button>
        {food.map((e) => (
          <FoodBox food={e} agregar={agregar}/>
        ))}
      </div>

      <div className="col-md-6 mt-6">
        {create ? <Form sendData={getData} /> : <Food food={ addFood}/>}
      </div>
    </div>
  </div>
  )
}
export default App;
