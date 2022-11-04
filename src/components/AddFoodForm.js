import { Divider, Input } from 'antd';
import { useEffect, useState } from 'react';

export function AddFoodForm({ setFoodsList }) {
  const defaultState = {
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  };
  const [state, setState] = useState(defaultState);

  function handleChange(event) {
    setState((old) => {
      let newValue = event.target.value;
      if (typeof old[event.target.name] === 'number') {
        newValue = parseFloat(event.target.value);
      }
      return { ...old, [event.target.name]: newValue };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = { ...state };
    setFoodsList((old) => [...old, newFood]);
    setState(defaultState);
  }

  // Tried this with a variable "buttonMessage" first and a boolean
  // as hideState. And the variable should changed based on that, but somehow
  // while the boolean changed, the variable stayed.
  const [hideState, setHideState] = useState('Hide Form');

  function handleClickHide() {
    if (hideState === 'Hide Form') setHideState('Add New Food');
    else setHideState('Hide Form');
    console.log(hideState);
  }

  useEffect(() => console.log(state), [state]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={hideState === 'Add New Food' ? { display: 'none' } : {}}
      >
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          name="name"
          value={state.name}
          type="text"
          onChange={handleChange}
        />

        <label>Image</label>
        <Input
          name="image"
          value={state.image}
          type="text"
          onChange={handleChange}
        />

        <label>Calories</label>
        <Input
          name="calories"
          value={state.calories}
          type="number"
          onChange={handleChange}
        />

        <label>Servings</label>
        <Input
          name="servings"
          value={state.servings}
          type="number"
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
      <button onClick={handleClickHide}>{hideState}</button>
    </>
  );
}
