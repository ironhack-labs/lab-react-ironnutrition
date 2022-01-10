import React, { useState } from 'react';
//import { useState } from 'react';

const FoodBox = (props) => {
  const { food, btnAddFood } = props;  // const food = props.food

  // manage state
  const [ number, setNumber ] = useState(0);//initial value of number
  const [onFocusNumber, setOnFocusNumber ] = useState("");

  // when the use click on the button to + Add food :
  //--> it calls-> btnAddFood, and this keep the food(all element with properties) and the number input
  //--> this goes to--> App.js --> and because btnAddFood refers to --> handleAddFood, this is called in App.js
  // --> btnAddFood={handleAddFood} --> this is the way to export data to App.js and then pass to another fragment/component 


  // Method to handle add food
  // const btnAddFood = (food, number) => {
  //   console.log('food', food)
  //   console.log('number', number)
  // }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value) // set the new state
  }

  // empty the input when onFocus
  const handleOnFocus = (event) => {
    event.target.value = onFocusNumber;
    setOnFocusNumber(event.target.value);
  }

  return(
    <div className="box">
      <article className="media">
      <div className="media-left">
          <figure className="image is-64x64">
          <img src={food.image} alt={food.name}/>
          </figure>
      </div>
      <div className="media-content">
          <div className="content">
          <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
          </p>
          </div>
      </div>
      <div className="media-right">
          <div className="field has-addons">
          <div className="control">
              <input 
                type="number" 
                className="input" 
                placeholder='Add number'
                onFocus={handleOnFocus}
                onChange={handleInputChange} 
                name="addNumber" //used to set [event.target.name] : event.target.value
                // value={number} // initial value useState is 0, change with onChange -> function changeAddFood ->update useState
              />
          </div>
          <div className="control">
              <button onClick={()=> {btnAddFood(number, food)}} className="button is-info">
              +
              </button>
          </div>
          </div>
      </div>
      </article>
    </div>
  )
} 

export default FoodBox;