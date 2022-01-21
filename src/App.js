import React from 'react';
import './App.css';
import foods from './foods.json'

function App() {
  const initialState = { Name: "", Calories: 0, Image:"" };
  const [state, setState] = React.useState(initialState);
  const [foodList, createFoodList] = React.useState([]);

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newState = { ...state, [inputName]: inputValue };
    setState(newState);
  };
  const [displayForm, setDisplayForm] = React.useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div className='foodList'>
        {foods.map((food) => (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt="food"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Name:{food.name}</strong> <br />
          <small>Calories:{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
))}
        </div>
        <div className='addFood'>
        <h1>Add New Foods</h1>
        <button onClick={() => {
          setDisplayForm(true)
        }}>Add Food</button>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createFoodList([...foodList, state]);
            setState(initialState);
          }}
        >
          <label htmlFor="foodName">Food Name </label>
          <input
            name="foodName"
            type="text"
            value={state.name}
            onChange={handleChange}
            style={{ display: "block" }}
          />
          <label htmlFor="calories">Calories </label>
          <input
            name="calories"
            type="number"
            value={state.calories}
            onChange={handleChange}
            style={{ display: "block" }}
          />
          <label htmlFor="image">Image </label>
          <input
            name="image"
            type="text"
            value={state.image}
            onChange={handleChange}
            style={{ display: "block" }}
          />
          <button type="submit">Add</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;

