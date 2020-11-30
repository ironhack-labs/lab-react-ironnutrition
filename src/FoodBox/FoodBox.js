import React, {useState} from 'react';

//Create a foodbox component: geeft een food item weer vanuit foods.json
// ontvang uit json via APP --> dus doorgeven als prop

function FoodBox(food){
const [value, setValue] = useState("");


  function handleClick(){
    let calories = food.valueAdd;
    let newFoods = [...food.stateAdd];
    newFoods.push({name: food.name, calories: (food.calories * value), quantity: value});
    calories += (value * food.calories);
    food.setValueAdd(calories);
    food.setStateAdd(newFoods);
   }

   function handleChange(event){
    const amount = event.currentTarget.value;
    setValue(amount);
    }
 
  return(
    <div className="box" key={food.index}>
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
        <input className="input" onChange={handleChange} type="number" value={value} /> </div>
        <div className="control">
        <button className="button is-info" onClick={handleClick}>

            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
  )
}
export default FoodBox