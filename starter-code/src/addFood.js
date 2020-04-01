import React, { Component } from 'react';

function addMeal() {
  return (
  <form>
    <label>
        <input type="text" name="name">Name</input>
        <input type="number" name="Calories">Number of Calories</input>
        <input type="image" value="Submit" />
    </label>
</form>)
}


export default addMeal;