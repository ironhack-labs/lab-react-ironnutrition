import React, { useState } from 'react';
import itemData from './foods.json';
import './App.css';
import ItemBox from './ItemBox';
import 'bulma/css/bulma.css';

function App() {
  // use the usState hook to get state into sfc
  const [newItem, setNewItem] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 0,
  });
  const [allItems, setAllItems] = useState(itemData);
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState('');
  const [filteredItem, setFilteredItems] = useState([]);
  const [allListItems, setAllListItems] = useState([]);
  //2.Form
  const inputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };
  const searchChange = (e) => {
    setSearchItem(e.target.value);
    const newItem = allItems.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredItems(newItem);
  };

  //3.Crud
  const addItem = (e) => {
    e.preventDefault();
    if (
      !newItem.name.trim() ||
      !newItem.calories.trim() ||
      !newItem.image.trim()
    ) {
      return setError((prev) => (prev = 'Please fill in all fields'));
    }
    setNewItem({
      name: '',
      calories: '',
      image: '',
    });
    setAllItems(prev => [...prev, newItem]);
    setFormVisible((prev) => (prev = false));
    setError((prev) => (prev = null));
  };

  const handleFormVisible = () => {
    setFormVisible(true);
  };

  const addToList = (item, number) => {
    setAllListItems((prev) => [
      ...prev,
      { name: item.name, calories: item.calories, quantity: number },
    ]);
  };

  const removeFromList = (itemName) => {
    const cleanedList = allListItems.filter((i) => i.name !== itemName);
    setAllListItems((prev) => (prev = cleanedList));
  };

  return (
    <div className="App container">
      <h1 className="title is-1">IronNutrition</h1>
      <div>
        <label htmlFor="search">Find a Food</label>
        <input
          id="search"
          type="text"
          className="input search-bar"
          name="search"
          onChange={searchChange}
          placeholder="Search"
          value={searchItem}
        />
      </div>
      <div className="column">
        {formVisible ? (
          <form className="addFood_form" onSubmit={addItem}>
            <button onClick={() => setFormVisible(p => p = false)} className="addFood__dismiss button is-text">X</button>
            <h2 id="addFood_form__title" className="title">
              Add Food Details
            </h2>
            <div className="AddFood_content__wrapper">
              <h3>Name</h3>
              <input name="name" value={newItem.name} onChange={inputChange} />
              <h3>Calories</h3>
              <input
                name="calories"
                value={newItem.calories}
                onChange={inputChange}
              />
              <h3>Image</h3>
              <input
                name="image"
                value={newItem.image}
                onChange={inputChange}
              />
            </div>
            <button className="button is-primary">Enter Food</button>
            <p>{error ? error : null}</p>
          </form>
        ) : (
          <button
            className="button is-primary mb-3"
            onClick={() => handleFormVisible()}
          >
            Add New Food
          </button>
        )}
      </div>
      <div className="App_content__container columns">
        <div className="ItemBox__wrapper column">
          {searchItem === ''
            ? allItems.map((e) => {
                return (
                  <ItemBox
                    name={e.name}
                    calories={e.calories}
                    image={e.image}
                    quantity={e.quantity}
                    addToList={addToList}
                  />
                );
              })
            : filteredItem.map((e) => {
                return (
                  <ItemBox
                    name={e.name}
                    calories={e.calories}
                    image={e.image}
                    quantity={e.quantity}
                    addToList={addToList}
                  />
                );
              })}
        </div>
        <div className="allItems column content">
          <h2 className="title is-3">What I Ate Today</h2>
          <ul>
            {allListItems.map((e) => {
              return (
                <div>
                  <li>
                    {e.quantity} {e.name} : {e.calories} cals
                  </li>
                  <button
                    className="button is-danger is-light"
                    onClick={() => removeFromList(e.name)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </ul>
          <b>
            Total:{' '}
            {allListItems.reduce((a, b) => a + b.calories * b.quantity, 0)} cal
          </b>
        </div>
      </div>
    </div>
  );
}

export default App;
