import React, { useState } from 'react'
import FoodBox from './FoodBox'
import dataFoods from '../foods.json';
import AddFood from './AddFood'

export default function FoodBoxList() {

  const listElements = []

  const [foods, setFoods] = useState(dataFoods)
  const [list, setList] = useState(listElements)
  const [totalCal, setTotalCal] = useState(0)

  function addNewFood(food) {
    setFoods([...foods, food])
  }

  function makeSearch({ target: { name, value } }) {
    console.log(value)
    const foodsCopy = [...foods]
    if (value === "") {
      setFoods(dataFoods)
    } else {
      const searchResult = foodsCopy.filter(food => food.name.includes(value))
      setFoods(searchResult)
    }
  }

  function addListFood(food) {
    setList([...list, food])
  }

  function totalCaloriesCount(cal) {
    setTotalCal(totalCal + cal)
  }

  return (<div className="columns">
    <div className="column is-half">
      <h2>Add new food</h2>
      <AddFood
        addNewFood={addNewFood}
      />
      <hr/>
      <h4>Search</h4>
      <input type="text" name="search-item" onChange={makeSearch}/>
      <hr/>
      {foods.map((food, index) => <FoodBox
        {...food}
        key={index}
        addListFood = {addListFood}
        totalCaloriesCount = {totalCaloriesCount}
      />)}
    </div>
    <div className="column is-half">
      <h2>Today's foods</h2>
      <ul>
        {list.map((list) => <li key={list.id}>{list.quantity} {list.name} = {list.calories} cal</li>)}
        <li>Total: {totalCal} cal</li>
      </ul>
    </div>
  </div>)
}