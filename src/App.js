import React, {useState} from "react"
import './App.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";
import { Row } from "antd" 
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";


function App() {

  //esta info viene del json
  const [foodList, setFoodList] = useState(foods);
  const [foodBackup, setFoodBackup] = useState(foods);
  // const [searchTerm, setSearchTerm] = useState("");
  const [hide, setHide] = useState(false);


  const addFoodFn = (datos) => {
    // console.log(datos);
    const newFoods = [...foodList, datos];
    setFoodList(newFoods);
    setFoodBackup(newFoods)
  }

  //recorremos el arreglo para filtrar la busqueda
  const searchFN = (term) => {
    // este term es los datos que yo pongo para buscar
    // console.log(term)
    const matches = foodBackup.filter((food) => {
      return food.name.toLowerCase().includes(term.toLowerCase());
    })
    setFoodList(matches);
  }
  const deleteFood = (position) => {
    console.log("delete", position);
    const newFoodList = [...foodList];
    newFoodList.splice(position, 1);
    setFoodList(newFoodList);
    setFoodBackup(newFoodList);
  }

  const hideAdd = () => {
    // console.log("esconder")
    setHide((valorActual) => !valorActual)
    
  }

  return (

    <div className="App">

      <button onClick={hideAdd}>{hide ? "Show to add food" : "Hide"}</button>

      {!hide && <AddFoodForm addFoodFn={addFoodFn}/>}

      <Search searchFN={searchFN}/>

      <Row style={{justifyContent:"center"}} gutter={[10, 10]}>

        {/* gutter es el espacio entre los elementos en el row y column, el primer 10 es horizontal, el segundo es vertical */}
          {foodList.map(({name, image, calories, servings}, index) => {
            return (

                  <FoodBox 
                  name={name} 
                  image={image} 
                  calories={calories} 
                  servings={servings}
                  key={name}
                  deleteFood={deleteFood}
                  index={index}
                  />
              )
            })
          }
          {foodList.length === 0 && (
            <div>
              <h3>Oops! there is no more content to show</h3>
              <img src="https://i1.sndcdn.com/avatars-Svw9ZyyzGQhWH2ao-YfBvLQ-t500x500.jpg" alt=""></img>
            </div>
          )}
      </Row>
      
    </div>
  );
}

export default App;
