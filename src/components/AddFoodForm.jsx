import React, { useState } from 'react';

export const AddFoodForm = ({ createNewElement }) => {
  const [name, newName] = useState('');
  const [image, newImage] = useState('');
  const [calories, newCalories] = useState(0);
  const [servings, newServing] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    createNewElement({ name, image, calories, servings });
    newName('');
    newImage('');
    newCalories(0);
    newServing(0);
  };
  return (
    <form
      onSubmit={submit}
      style={{
        marginTop: '1rem',
      }}
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(datos) => newName(datos.target.value)}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(datos) => newImage(datos.target.value)}
      />
      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        name="calories"
        id="calories"
        min={0}
        value={calories}
        onChange={(datos) => newCalories(datos.target.value)}
      />
      <label htmlFor="servings">Serving:</label>
      <input
        type="number"
        name="servings"
        id="servings"
        min={0}
        value={servings}
        onChange={(datos) => newServing(datos.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
