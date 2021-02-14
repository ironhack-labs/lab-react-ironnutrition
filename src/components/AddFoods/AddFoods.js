import React from 'react';
import './AddFoods.css';


let id = 0;

const listFoods = {
    id: '',
    name: '',
    image: '',
    calories: 0,
    quantity: 0,
};

function AddFoods({submitForm}) {
  const [formFood, SetFormFood] = React.useState(listFoods);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formFood);
    SetFormFood(listFoods)
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    SetFormFood((formFood) => ({
      ...formFood,
      [name]: value,
    }));
  };

  
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formFood.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={formFood.image}
          onChange={handleChange}
        ></input>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          value={formFood.calories}
          onChange={handleChange}
        ></input>
         <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={formFood.quantity}
          onChange={handleChange}
        ></input>
        <button type="submit">submit new food</button>
      </form>

     
    </div>
  );
}

export default AddFoods;
