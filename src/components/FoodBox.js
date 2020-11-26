import React, { useState } from 'react'
import foods from '../foods.json';
import FormikAdd from './FormikAdd'


const FoodBox =(props) => {
    const[food, setFood] = useState(foods)
    const[showForm, setShowForm] = useState(false)
    const[count, setCount] = useState(1)
    const[todays, setTodays] = useState("")
    let todaysFood = []

    function addNewFood(food) {
        foods.push(food)
        setFood([...foods, food])
        console.log(foods.length)
      }

      function addTodaysFood(food){
          todaysFood.push(food)
          setTodays([...todaysFood, food])
      }

    return <div className="columns">
        <div className="column">
            <input className="input" type="text" />
            <button className="button is-info" onClick={() => 
                setShowForm(!showForm)}>Add New Food</button>
            <div className="box">
            {foods.map(fd => 
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src={fd.image} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{fd.name}</strong> <br />
                    <small>{fd.calories}</small>
                </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                <div className="control">
                    <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={() => {
                        {addTodaysFood(fd)}
                        console.log(fd.name)
                        console.log(todaysFood)
                    }}>
                    +
                    </button>
                </div>
                </div>
            </div>
            </article>
                )}
            </div>
        </div>

        
        <div className="column">

            {showForm && <FormikAdd addNewFood={addNewFood}/>}
            {addTodaysFood}
            <h1>Today's foods</h1>
            {todaysFood.map(food =>
                <p>{food.name}</p>
                )}
        </div>
    </div>
}

export default FoodBox