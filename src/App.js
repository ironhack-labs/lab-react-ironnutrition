import React from 'react';
import FoodBox from "./FoodBox/FoodBox"
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

  const handleChange = (event) => {
    const {value, name} = event.target;
    setFoodInputsState({
        ...foodInputsState,
        [name]: value
      });
  }

  const handleSubmitNewFood = (event) => {
  event.preventDefault();
  setFoodListState(foodListState.concat(foodInputsState))
  }

  const handleAdd = (name,image,calories,quantity) => {
    const foodClicked = {
      name:name,
      image:image,
      calories:calories,
      quantity:quantity
    }
    setformStateTodaysFood([...formStateTodaysFood].concat(foodClicked));
  }

  return (
    <article style={{
      display:"flex",
      justifyContent:"space-evenly"
    }}>
      <div>
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
          type="text"
          name="calories"
          id="calories"
          required
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
        {foodListState.map(food => <FoodBox {...food} handleAdd={()=> handleAdd(food.name,food.image,food.calories,food.quantity)}/>)}
      </div>
      <div>
        <h1>Today's foods</h1>
        <form>
          <button type="submit">Create your food</button>
          {formStateTodaysFood.map(food => <FoodBox {...food} />)}
        </form>
      </div>
    </article>
  );
}

export default App;
