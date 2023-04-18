import React, { useState } from 'react';
import jsonData from './foods.json';

import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';

const ProductsPage = () => {
  const [foods, setFoods] = useState(jsonData);
  const [search, setSearch] = useState('');

  const filteredFoods = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setSearch={setSearch} />
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <FoodBox foods={filteredFoods} />
    </div>
  );
};

export default ProductsPage;
