import React from 'react';
import './App.css';

import 'bulma/css/bulma.css';
import foods from './foods.json';

function FoodBox(){

  const initialState = { name: "", calories: "" };
  const [state, setState] = React.useState(initialState);
  const [foods, setFood] = React.useState([]);

  const hanldeChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const newState = { ...state, [inputName]: inputValue };
    setState(newState);
  };

  return (
<div>
  {foods.map((food) => (
<div className="box">
  <article className="media" key={food.name}>
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt={food.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
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
  <div>
    <button>Add food item</button>
    <form
          onSubmit={(event) => {
            event.preventDefault();
            setFood([...foods, state]);
            setState(initialState);
          }}
        >
          <label htmlFor="studentName">Name </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={hanldeChange}
            style={{ display: "block" }}
          />
          <label htmlFor="number of calories">number of calories</label>
          <input
            name="number of calories"
            type="number"
            value={state.calories}
            onChange={hanldeChange}
            style={{ display: "block" }}
          />
          <label htmlFor="email">email </label>
          
          <button type="submit">Add</button>
        </form>
  </div>
  
</div>

  ))}
</div>
  )
}

function App() {
  return (
    <div>
<FoodBox/>
    </div>
   
  )
}

export default App;
