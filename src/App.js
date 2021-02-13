import React from 'react';
import FoodBox from "./FoodBox/FoodBox"
import FoodBoxTodaysFood from "./FoodBoxTodaysFood/FoodBoxTodaysFood"
import './App.css';
import Foods from "./foods.json"
import 'bulma/css/bulma.css';

const initialStateTodaysFood = [];
const initialStateNewFood = {
  name:"",
  image:"",
  calories:""
};

//hacer visible el formulario para crear un nuevo alimento
const openNewFoodForm = () => {
  document.querySelector("#newFood").classList.remove("hidden")
  document.querySelector("#newFood").classList.add("visiblity")
}

function App() {

  //Lista Today's food
  const [formStateTodaysFood, setformStateTodaysFood] = React.useState(initialStateTodaysFood);

  //Inputs a rellenar de la nueva comida
  const [foodInputsState, setFoodInputsState] = React.useState(initialStateNewFood)
  
  //Lista a mostrar de alimentos
  const[foodListState, setFoodListState] = React.useState(Foods)

  //State Filtrado
  const[foodListFilter, setListFilter] = React.useState(Foods)
  
  //Change para los inputs del nuevo alimento
  const handleChange = (event) => {
    const {value, name} = event.target;
    setFoodInputsState({
        ...foodInputsState,
        [name]: value
      });
  }
  
  //Filtrado de la lista
  const handleSearchBarChange = (tag) => {
    const {value} = tag.target;
    if(value !== ""){
      const foodFilter = foodListState.filter(food => (food.name.toLowerCase().includes(value.toLowerCase())))
      setListFilter(foodFilter)
    } else {
      setListFilter([...foodListState])
    }
  }
  
  //Añadirlo a la lista de toda la comida
  const handleSubmitNewFood = (event) => {
  event.preventDefault();
  setFoodListState(foodListState.concat(foodInputsState))
  setListFilter(foodListState.concat(foodInputsState))
  }
  
  
  //Lista de Todaays Food
  const handleAdd = (name,image,calories,quantity) => {
    const foodClicked = {
      name:name,
      image:image,
      calories:calories,
      quantity: document.querySelector("#quantity").value
    }

    //Sumo la cantidad
    formStateTodaysFood.forEach(food => {
      if(food.name === foodClicked.name){
        const sum = food.quantity*1 + foodClicked.quantity*1
        food.quantity = sum
        console.log("Ha entrado el if");
      }  else {
        console.log("Ha entrado el else");
        setformStateTodaysFood([...formStateTodaysFood].concat(foodClicked));
      }  
    })
    setformStateTodaysFood([...formStateTodaysFood].concat(foodClicked));  
  }
  
  return (
    <article style={{
      display:"flex",
      justifyContent:"space-evenly"
    }}>
      <div>
      <form>
        <label htmlFor="searchBar">Search Bar</label>
        <input type="text" name="searchBar" id="searchBar" onChange={handleSearchBarChange}/>
      </form>
      <button onClick={openNewFoodForm}>Add new food</button>
      <form onSubmit={handleSubmitNewFood} id="newFood" className="hidden">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          onChange={handleChange}
        />
        <label htmlFor="calories">calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          required
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
        {foodListFilter.map(food => <FoodBox {...food} handleAdd={()=> handleAdd(food.name,food.image,food.calories,food.quantity)}/>)}
      </div>
      <div>
        <h1>Today's foods</h1>
        <form>
          <button type="submit">Create your food</button>
          {formStateTodaysFood.map(food => <FoodBoxTodaysFood {...food} />)}
        </form>
      </div>
    </article>
  );
}

export default App;
