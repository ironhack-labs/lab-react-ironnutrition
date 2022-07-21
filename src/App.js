import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from "./Components/FoodBox"
import AddFoodForm from './Components/AddFoodForm';
import Empty from './error.png';

function App() {
  //console.log(foods)
  //const [el valor, FnParaActualizar}] = useState(valorInicial)
  const [comidas, setComidas] = useState(foods);
  
  //arreglo.map( () => ){
  //return <AlgoNuevo key> - <Componente key>
  //})

  const agregarComida = (nuevaComida) => {
      console.log('Nueva comida', nuevaComida);
      const nuevaComidas = [ ...comidas ]
      nuevaComidas.push(nuevaComida)
      setComidas(nuevaComidas);
  };

  return ( 
    <div>
    <AddFoodForm agregarComida = {agregarComida} />
      <div className='tabla'>
      {comidas.map((comida, index) => {
          return (<FoodBox key= {index} comida={comida} />
        )
        })}
        </div>
        {
          comidas.length === 0 && <img src={Empty} alt='error'/>
        }
    </div>
  );
}

export default App;
