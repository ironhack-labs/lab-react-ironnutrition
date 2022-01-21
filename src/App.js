import "bulma/css/bulma.css";
import foods from "./foods.json";
import "./components/foodbox/Foodbox";
import Foodbox from "./components/foodbox/Foodbox";
import "./App.css";
import React from "react";

function App() {
  const initialFood = {
    name: "",
    image: "",
    calories: 0,
  };

  const [isActive, setActive] = React.useState(false);
  const [newFood, setNewFood] = React.useState(initialFood);
  const [foodList, setFoodList] = React.useState(foods);
  const handleInputValue = ({ target }) => {
    setNewFood({ ...newFood, [target.name]: target.value });
  };

  //transforms imported fooslist into JSX React
  const foodListInJSX = foodList.map((food) => (
    <div key={food.name}>
      <Foodbox name={food.name} calories={food.calories} image={food.image} />
    </div>
  ));
  return (
    <div className="App">
      <button onClick={() => setActive(true)}>Add new food</button>
      {isActive && (
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setFoodList([...foodList, newFood]);
              setActive(false);
            }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={newFood.name}
              onChange={handleInputValue}
              name="name"
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              onChange={handleInputValue}
              value={newFood.image}
              name="image"
            />
            <label htmlFor="calories">Calories</label>
            <input
              type="text"
              onChange={handleInputValue}
              value={newFood.calories}
              name="calories"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <div>
        <h2>Todays food</h2>
        <ul></ul>
        <p>Total: {/*sum of total calories*/} cal</p>
      </div>
      {foodListInJSX}
    </div>
  );
}

export default App;

{
  /* <form
onSubmit={(event) => {
  event.preventDefault();
  setStudents([...students, state]);
  setState(initialState);
}}
>
<label htmlFor="studentName">student name </label>
<input
  name="studentName"
  type="text"
  value={state.studentName}
  onChange={hanldeChange}
  style={{ display: "block" }}
/>
<label htmlFor="email">email </label>
<input
  name="email"
  type="email"
  value={state.email}
  onChange={hanldeChange}
  style={{ display: "block" }}
/>
<button type="submit">Add</button>
</form> */
}
