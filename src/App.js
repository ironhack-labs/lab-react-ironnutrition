import './App.css';
import foods from './foods.json';
import { useState, useEffect } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Empty from './error.png';
import { Input } from 'antd';

function App() {

  const [comidas, setComidas] = useState(foods)
  const [dataSearch, setdataSearch] = useState(foods);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("Add New Food")

  //Function to add food to the comidas array:
  const agregarComida = (nuevaComida) => {
    const nuevasComidas = [...comidas]
    nuevasComidas.push(nuevaComida)
    setComidas(nuevasComidas)
  }
 //Search functionality:
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() =>{
    const filter = dataSearch.filter(food => {
      return food.name.toLowerCase().includes(search.toLowerCase())
    })
    setComidas(filter)
  }, [search])

  //Function to delete:
  function deleteButton(name) {
    const newList = comidas.filter(item => item.name !== name)
    console.log(newList)
    setComidas(newList)
  }

  const toggleShow = () =>{
    setShow(!show)
    if(show){
      setMessage("Add New Food")
    }else{
      setMessage("Hide Form")
    }
  }

  return (
    <div className="App">

      <label>Search</label> 
      <Input value={search} type="text" onChange={updateSearch} />
      <button className="button" onClick={toggleShow}>{message}</button>
      {show && <AddFoodForm agregarComida={agregarComida}/>}
      
      <div className="tabla">
      {comidas.map((comida, index) => {
        return(
          <FoodBox key={index} comida={comida} deleteButton={deleteButton}/>
   
        )})}
        </div>
        {
          comidas.length === 0 && <img src={Empty} alt=""/>
        }
        
    </div>
  )
}
export default App;