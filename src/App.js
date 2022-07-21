import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Empty } from 'antd';

function App() {
  //console.log(foods);
  //const [elValor,FnParaActualizarElValor] = useState(valorInicial)
  const [comidas, setComidas] = useState(foods);
  const agregarComida = (nuevaComida) => {
    const nuevasComidas = [...comidas]
    nuevasComidas.push(nuevaComida)
    setComidas(nuevasComidas)
  }
  console.log(comidas);
  //arreglo.map( (dato) => {
  // return <AlgoNuevo key> - <Componente key>
  //})
  return (
    <div className="App">

    <AddFoodForm agregarComida={agregarComida}/>
    <div className="tabla">
    {comidas.map((comida, index) => {
      return(
        <FoodBox key={index} comida={comida}/>
 
      )})}
      </div>
      {
        comidas.length === 0 && <img src={Empty} alt=""/>
      }
      
  </div>

  )
}

export default App;