import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import {useState} from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm';
import Empty from "./error.png"
function App() {
  //console.log(foods)
  //const [el valor,FnParaActualizarEl Valor]=useState(valorInicial)
  const [comidas, setComidas]= useState(foods);
  
  //arreglo.map ( ()=>{
    //return <AlgoNuevo key>- <Componente key>
    //})
  const agregarComida =(nuevaComida)=>{
    console.log('Nueva comida', nuevaComida);
    //Clonar el array [...comidas]
    const nuevasComidas = [...comidas]
    nuevasComidas.push(nuevaComida)
    setComidas (nuevasComidas);
  };
    return (
    <div>
    <AddFoodForm agregarComida={agregarComida}/>
      <div className="tabla">
      {comidas.map((comida, index) =>{
        
        return (<FoodBox key={index} comida={comida}/>
        )
      })}
      </div>
      {/*Thruty condition && Verdadero*/}
      {
        comidas.length===0 && <img src={Empty} alt="error"/>
      }
      
    </div>
  );
}

export default App;
