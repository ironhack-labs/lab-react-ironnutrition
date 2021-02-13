import React, { useState } from 'react';
import FoodBox from '../../components/FoodBox/FoodBox';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import FoodList from '../../components/FoodList/FoodList';

const Main = ({ food }) => {
  const [showForm, setForm] = useState(false);
  const [showAddButton, setAddButton] = useState(true);
  const [setFood, setAddFood] = useState(food);
  const [searchQuery, setQuery] = useState('');
  const [selectedFood, setFoodList] = useState([]);

  const handlerFoodForm = (event, newFood, resetForm, stateFunc) => {
    event.preventDefault();
    stateFunc((state) => [...state, newFood]);
    const resetFormState = resetForm;
    setForm(false);
    setAddButton(true);
  };

  const foodSearch = (query) => {
    setQuery(query);
  };

  const addFoodToList = (newItem, newQuantity) => {
    const isYetSelected = selectedFood.filter((food) => food.name === newItem);
    if (isYetSelected.length < 1) {
      const newItemList = setFood.filter((food) => food.name === newItem);
      newItemList[0] = {
        ...newItemList[0],
        quantity: newQuantity,
      };
      setFoodList((state) => [...state, ...newItemList]);
    } else {
      let updateItem = selectedFood.filter((food) => food.name === newItem);
      updateItem[0].quantity = newQuantity;
      const quitOldItems = selectedFood.filter((food) => food.name !== newItem);
      console.log('hola', quitOldItems);
      setFoodList([...quitOldItems, ...updateItem]);
    }
  };

  const deleteFoodList = (quit) => {
    const newList = selectedFood.filter((food) => food.name !== quit);
    setFoodList([...newList]);
  };

  const sumCal = () => {
    return selectedFood.reduce((a, b) => b.calories * b.quantity + a, 0);
  };

  return (
    <main>
      <section>
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
          <Search func={foodSearch} />
        </article>
        <section className="columns">
          <div id="foodList" className="column">
            {searchQuery
              ? setFood
                  .filter(({ name }) =>
                    name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item, idx) => (
                    <FoodBox
                      info={item}
                      key={item.name + idx}
                      addFood={addFoodToList}
                    />
                  ))
              : setFood.map((item, idx) => (
                  <FoodBox
                    info={item}
                    key={item.name + idx}
                    addFood={addFoodToList}
                  />
                ))}
          </div>
          <section id="right" className="column">
            <h3>Today's Food</h3>
            <ul>
              {selectedFood.map((food, idx) => (
                <FoodList
                  info={food}
                  key={food.name + idx}
                  deleteList={deleteFoodList}
                />
              ))}
            </ul>
            <p>Total: {sumCal()} cal</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Main;
