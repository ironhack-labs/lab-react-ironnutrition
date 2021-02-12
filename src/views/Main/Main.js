import React, { useState } from 'react';
import FoodBox from '../../components/FoodBox/FoodBox';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';

const Main = ({ food }) => {
  const [showForm, setForm] = useState(false);
  const [showAddButton, setAddButton] = useState(true);
  const [setFood, setAddFood] = useState(food);
  const [searchQuery, setQuery] = useState(null);

  const handlerFoodForm = (event, newFood, resetForm, stateFunc) => {
    event.preventDefault();
    stateFunc((state) => [...state, newFood]);
    const resetFormState = resetForm;
    setForm(false);
    setAddButton(true);
  };

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
      <article>
        <Search func={setQuery} />
      </article>
      <div id="foodList">
        {searchQuery
          ? setFood
              .filter(({ name }) => name.includes(searchQuery))
              .map((item, idx) => <FoodBox info={item} key={item.name + idx} />)
          : setFood.map((item, idx) => (
              <FoodBox info={item} key={item.name + idx} />
            ))}
      </div>
    </main>
  );
};

export default Main;
