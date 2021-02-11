import React, { useState } from 'react';
import FoodBox from '../../components/FoodBox/FoodBox';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
const Main = ({ food }) => {
  const [showForm, setForm] = useState(false);
  const [showAddButton, setAddButton] = useState(true);
  const [setFood, setAddFood] = useState(food);
  const handlerFoodForm = (event, newFood, resetForm, stateFunc) => {
    event.preventDefault();
    stateFunc((state) => ({ ...state, {name, calories, url, quantity:0}  }));
    const resetFormState = resetForm;
  };
  console.log(setFood);
  return (
    <main>
      <article>
        {showAddButton && (
          <Button
            txt="Add food"
            handleClick={() => {
              setForm(true);
              setAddButton(false);
            }}
          />
        )}
        {showForm && (
          <Form submitHandler={handlerFoodForm} stateFunc={setAddFood} />
        )}
      </article>
      <div id="foodList">
        {setFood.map((item, idx) => (
          <FoodBox info={item} key={item.name + idx} />
        ))}
      </div>
    </main>
  );
};

export default Main;
