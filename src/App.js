import React from 'react';
import './App.css';
import foodArr from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import { useState } from 'react';
import AddFood from './components/AddFood/AddFood';
import SearchBar from './components/SearchBar/SearchBar';
import FoodCartList from './components/FoodCartList/FoodCartList';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [foods, setFoods] = useState(foodArr);
  const [displayForm, setDisplayForm] = useState(false);
  const [foodsSelection, setFoodsSelection] = useState([]);

  function toggleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  }

  function filterByProduct(productName) {
    if (productName !== '') {
      setFoods((foodSetted) => {
        return foodSetted.filter((food) =>
          food.name.toLowerCase().includes(productName.toLowerCase())
        );
      });
    } else {
      setFoods(foodArr);
    }
  }

  function foodSelect(newFood) {
    setFoodsSelection((foodSetted) => [...foodSetted, newFood]);
  }

  //Utilizamos un filter como en el lab anterior para eliminar 
  function foodToTrash(productName){
    setFoodsSelection((foodSetted) => foodSetted.filter((food) => food.name !== productName));
    toast("Food deleted")
    
  }

  return (
    <>
    <div className="App">
      <div><h1>IRON NUTRITION</h1></div>
      <SearchBar filterByProduct={filterByProduct} />

      {/* toggleForm */}
      <button className="button is-info m-3" onClick={ toggleFormDisplay }>
        {displayForm ? 'CloseForm' : 'AddFood'}
      </button>

      {displayForm && (
        <AddFood addFood={addFood} toggleFormDisplay={ toggleFormDisplay } />
      )}

      {/* realizamos un .map de foods, añadimos componente con atributo valor food */}
      <div className="is-flex mx-3">
        <div>
          {foods.map((food, index) => (
            <FoodBox key={index} food={food} foodSelect={ foodSelect } />
          ))}
        </div>

        <div className="mx-5">
          <FoodCartList foodsSelection={foodsSelection} foodToTrash={ foodToTrash }/>
        </div>
      </div>
    </div>
    <Toaster/>
    </>
  );
}

export default App;
