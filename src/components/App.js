import React, { useState } from 'react';
import './App.css';
import foods from '../foods.json';

import FoodList from './FoodList';
import CalorieTracker from './CalorieTracker';
import Search from './Search';

function App() {
  // Lista de comidas, atualizada a partir do arquivo foods.json
  // Array destructuring
  const [foodList, setFoodList] = useState(foods);

  // CalorieTracker state
  // Esse state está sendo usado para exibir o total de calorias do dia
  const [todaysCalories, setTodaysCalories] = useState(0);

  // Esse state está sendo usado para guardar as comidas adicionadas até agora
  const [todaysFoods, setTodaysFoods] = useState([]);

  function filterFoods(term) {
    // Se a caixa de pesquisa estiver vazia, atualize a lista de comidas para todas as comidas novamente
    if (!term) {
      return setFoodList([...foods]);
    }

    // Verifica se cada objeto da lista de comidas inclui em seu nome o termo de pesquisa
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(term.toLowerCase());
    });

    // Como resetar a pesquisa em cada backspace do usuario
    // Ao inves de filtrar o state da lista de comidas, filtramos a array original
    // const filtered = foods.filter((food) => {
    //   return food.name.toLowerCase().includes(term.toLowerCase());
    // });

    return setFoodList([...filtered]);
  }

  // Essa funçāo é executada pelo component FoodBox quando o usuario clica no botāo "+". O parametro food é a comida atual do FoodBox
  function addFood(food) {
    // Adiciona a comida do FoodBox atual para a lista de comidas consumidas hoje
    const updatedFoods = [...todaysFoods, food];

    // Roda a atualizaçāo do DOM
    setTodaysFoods([...updatedFoods]);
    // Calcula o incremento das calorias de hoje e roda a atualizaçāo do DOM
    return setTodaysCalories(
      (prevState) => prevState + food.calories * food.quantity
    );
  }

  return (
    <div className="container mt-5">
      {/* Caixa de pesquisa */}
      <Search foodList={foodList} handleSearch={filterFoods} />
      <div className="row">
        <div className="col-6">
          {/* Lista de comidas para o usuario selecionar */}
          <FoodList foodList={foodList} addFood={addFood} />
        </div>
        <div className="col-6">
          {/* Comidas consumidas hoje e total de calorias do dia */}
          <CalorieTracker foods={todaysFoods} calories={todaysCalories} />
        </div>
      </div>
    </div>
  );
}

export default App;
