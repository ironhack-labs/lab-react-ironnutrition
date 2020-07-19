import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import Search from './components/Search';

function App() {
  const initialState = {
    food: foods,
    formClass: 'is-hidden',
    isShowingForm: 'false',
    form: {
      name: '',
      calories: 0,
      image: '',
    },
  };

  const [state, setState] = useState(initialState);

  const allFoods = state.food.map((element) => (
    <FoodBox key={element.name} allFood={state.food} food={element.name} />
  ));

  const handleChange = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  const saveNew = (event) => {
    event.preventDefault();
    const newArray = [...state.food];
    const newFood = {
      name: state.form.name,
      calories: state.form.calories,
      image: state.form.image,
      quantity: 0,
    };
    newArray.push(newFood);
    setState({
      ...state,
      formClass: 'is-hidden',
      food: newArray,
      form: {
        name: '',
        calories: 0,
        image: '',
      },
    });
  };

  const addNewForm = () => {
    if (state.isShowingForm === 'false') {
      setState({
        ...state,
        formClass: 'is-block',
        isShowingForm: 'true',
      });
    } else {
      setState({
        ...state,
        formClass: 'is-hidden',
        isShowingForm: 'false',
      });
    }
  };

  const form = (
    <form onSubmit={saveNew} className={state.formClass}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            onChange={handleChange}
            value={state.form.name}
            placeholder="Name"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Number of calories</label>
        <div className="control">
          <input
            className="input"
            type="number"
            name="calories"
            onChange={handleChange}
            value={state.form.calories}
            placeholder={0}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image url</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="image"
            onChange={handleChange}
            value={state.form.image}
            placeholder="Image"
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <input type="submit" className="button is-link" value="Add" />
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={addNewForm}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container">
      <div className="columns mx-4 my-4">
        <div className="column">
          <h1 className="is-size-1 has-text-weight-bold">Ironnutrition</h1>
          <Search />
          <div className="columns">
            <div className="column my-4">{allFoods}</div>
            <div className="column my-4">
              <button className="button is-primary my-4" onClick={addNewForm}>
                Add new food
              </button>
              {form}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
