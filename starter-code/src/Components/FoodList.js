import React, { useState } from "react";

import FoodsData from "../foods.json";
import { FoodBox } from "./Foodbox";
import { AddFood } from "./AddFood";
let list = [];
let totlist;

let sumTot = [];
let sumaTotal;

export const FoodList = () => {
  //Estados de las foods
  const [foods, setFood] = useState(FoodsData);
  //Estado para añadir del formulario
  const [addFood, setAddFood] = useState(false);
  //Estado de la busqueda
  const [filterStart, setFilterStart] = useState("");
  //Estados de la lista y del sumatorio total
  const [listSelectFood, setListSelectFood] = useState([]);
  const [totCal, setTotCal] = useState(0);

  function addNewFood(food) {
    console.log(food);
    const copyFoodsData = [...foods];
    copyFoodsData.push(food);
    console.log(copyFoodsData);
    setFood(copyFoodsData);
  }

  const showForm = () => {
    const { show } = addFood;
    setAddFood(!show);
  };
  //funcion para abrir el formulario
  const closeForm = () => {
    setAddFood(false);
  };

  //Funcion para traerme del hijo(foodBox) los estados y trabajar con ellos
  const changeSelectFood = (value, name, calories) => {
    if (value !== 0) {
      calories = calories * value;
      sumaTotal = sumTot.push(calories);
      //Lista de foods elegidas
      totlist = list.push({ name, value, calories });
      //Funcion para sumar todos los elementos pusheados
      let total = sumTot.reduce((a, b) => a + b, 0);
      //Cambio de estados
      setListSelectFood(list);
      setTotCal(total);
    }
  };

  //busqueda de comidas
  const filtered_food = foods.filter(food => {
    const re = new RegExp(filterStart);
    return re.test(food.name);
  });

  return (
    <div>
      <div>
        <label></label>
        <input
          value={filterStart}
          onChange={e => setFilterStart(e.target.value)}
          placeholder="Search"
          className="form-control"
        />
      </div>
      <button className="button is-info" onClick={showForm}>
        Add Food
      </button>
      {addFood && (
        <AddFood closeForm={closeForm} includeFood={addNewFood}></AddFood>
      )}
      <div className="columns">
        <div className="column">
          {filtered_food.map((food, idx) => (
            <FoodBox
              key={idx}
              {...food}
              //Forma de pasarle al hijo(FoodBox) la funcion, para poder llamarlo desde alli
              changeSelectFoodFunction={(value, name, calories) =>
                changeSelectFood(value, name, calories)
              }
            ></FoodBox>
          ))}
        </div>
        <div className="column">
          <h1>Today's Foods</h1>
          {listSelectFood && (
            <ul>
              {list.map(foodname => (
                <li>
                  · {foodname.value} {foodname.name} = {foodname.calories}
                </li>
              ))}
            </ul>
          )}
          <h2>Total {totCal} cal</h2>
        </div>
      </div>
    </div>
  );
};
