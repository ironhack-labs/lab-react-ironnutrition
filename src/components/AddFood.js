import React, { useState } from 'react';

const AddFood = () => {
  const [food, setFood] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 0
  });

  const [listFood, setListFood] = useState([]);

  const getNewFood = (e) => {
    return setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFood = (e) => {
    e.preventDefault();

    setListFood([...listFood, food]);

    setFood({
      name: '',
      calories: '',
      image: '',
      quantity: 0
    });
  };

  return (
    <>
      {listFood.map((element) => {
        return (
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={element.image}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{element.name}</h5>
                  <p class="card-text">Calories: {element.calories}</p>
                  <h4>{element.quantity}</h4>
                </div>
                <button type="button" class="btn btn-primary">
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <form
        onSubmit={(e) => {
          addNewFood(e);
        }}
      >
        <label>Name: </label>
        <input
          onChange={(e) => {
            getNewFood(e);
          }}
          name="name"
          value={food.name}
        />{' '}
        <br />
        <label>Calories: </label>
        <input
          onChange={(e) => {
            getNewFood(e);
          }}
          name="calories"
          value={food.calories}
        />{' '}
        <br />
        <label>Image: </label>
        <input
          onChange={(e) => {
            getNewFood(e);
          }}
          name="image"
          value={food.image}
        />{' '}
        <br />
        <button class="btn btn-primary">Create</button>
      </form>
    </>
  );
};

export default AddFood;
