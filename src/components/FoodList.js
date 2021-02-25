import React, { Component } from 'react';
import shortid from 'shortid';
import foods from './../foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './AddNewFood';
import Search from './Search';
import TodaysFood from './TodaysFood';

class FoodList extends Component {
  state = {
    foodsList: foods,
    filteredFoodsList: foods,
    showForm: false,
    todaysFood: [],
    totalCalories: 0,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  // ITERACIÓN 3 - ADD NEW FOOD
  addFood = (newFoodObj) => {
    // hacer una copia de la lista original de comidas
    const foodsListCopy = [...this.state.foodsList];

    // añadir la nueva comida en 1era posición del array
    foodsListCopy.unshift(newFoodObj);
    // resetear el state
    this.setState({ filteredFoodsList: foodsListCopy });

    // una vez la comida está añadida a la lista, esconder el formulario
    this.state.showForm = false;
  };

  // ITERACIÓN 4 - SEARCH BAR
  filterFoods = (searchTerm) => {
    // convertimos la palabra buscada en minúsculas
    const searchedTerm = searchTerm.toLowerCase();

    // filtramos una copia de la lista original de comidas para devolver únicamente las comidas cuyo nombre (en minúsculas también) corresponden al término de búsqueda
    const filteredList = [...this.state.foodsList].filter((foodObj) => {
      return foodObj.name.toLowerCase().includes(searchedTerm);
    });

    // actualizamos la lista de comidas filtradas (la que vamos a mostrar en el render())
    this.setState({ filteredFoodsList: filteredList });
  };

  // ITERACIÓN 5 Y 6 (BONUS)
  addTodaysFood = (foodObj) => {
    // creamos una copia del array de las comidas de hoy
    let todaysFoodsCopy = [...this.state.todaysFood];
    // comprobamos si la comida a añadir ya se encuentra en el array todaysFoodsCopy
    let found = todaysFoodsCopy.find((food) => food.name === foodObj.name);

    // calculamos las calorías totales según qué cantidad de la comida se ha añadido
    foodObj.calories *= foodObj.quantity;

    if (found) {
      // si la comida ya existe en el array de comidas de hoy, le sumamos al objeto comida la cantidad y calorías que se añadieron nuevamente
      found.quantity += foodObj.quantity;
      found.calories += foodObj.calories;
    } else {
      // sino, añadimos el objeto foodObj al array todaysFoodsCopy
      todaysFoodsCopy.push(foodObj);
    }

    // calculamos el total de calorías de todas las comidas de hoy
    const totalCalories = todaysFoodsCopy.reduce(
      (acc, val) => acc + val.calories,
      0
    );

    // actualizamos el state con la lista actualizada de comidas de hoy y el nuevo total de calorías
    this.setState({ todaysFood: todaysFoodsCopy, totalCalories });
  };

  // ITERACIÓN 7 (BONUS)
  deleteFood(index) {
    // creamos una copia del array de las comidas de hoy
    const todaysFoodsCopy = [...this.state.todaysFood];

    // sacamos la comida que corresponde al index recibido del array (copia) de comidas
    todaysFoodsCopy.splice(index, 1);

    // volvemos a calcular el total de calorías
    const totalCalories = todaysFoodsCopy.reduce(
      (acc, val) => acc + val.calories,
      0
    );

    // actualizamos la lista de comidas con el array copia y el nuevo total de calorías después de eliminar la comida
    this.setState({ todaysFood: todaysFoodsCopy, totalCalories });
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <h1 className="title">IronNutrition</h1>

          <Search searchFoods={this.filterFoods} />

          <div id="add-section">
            <button className="button" onClick={this.toggleForm}>
              Add new food
            </button>
            {this.state.showForm ? <AddNewFood addFood={this.addFood} /> : null}
          </div>

          <div className="columns">
            <div className="column">
              {this.state.filteredFoodsList.map((food, index) => {
                food.id = shortid.generate();
                return (
                  <FoodBox
                    key={index}
                    food={food}
                    updateTodaysFood={this.addTodaysFood}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="section">
          <h2 id="todays-food-title">Today's foods</h2>
          {/* comprobamos que el array todaysFood contiene algo
          > si es el caso, mostramos lo que hay en el array todaysFood 
          > sino, no mostramos nada (null) */}
          {this.state.todaysFood.length > 0 ? (
            <div>
              <ul>
                {this.state.todaysFood.map((oneTodaysFood, index) => {
                  oneTodaysFood.id = shortid.generate();
                  return (
                    <TodaysFood
                      key={oneTodaysFood.id}
                      {...oneTodaysFood}
                      deleteFood={() => this.deleteFood(index)}
                    />
                  );
                })}
              </ul>
              <p>Total calories: {this.state.totalCalories}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FoodList;
