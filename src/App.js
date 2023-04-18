import React, { useState } from 'react';
import jsonData from './foods.json';

import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';

const ProductsPage = () => {
  const [foods, setFoods] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <FoodBox foods={foods} />
    </div>
  );
};

export default ProductsPage;
