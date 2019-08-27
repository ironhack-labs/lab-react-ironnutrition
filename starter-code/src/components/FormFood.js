import React, {  useState, useContext,  } from "react";
import {FoodContext} from './foodContext';

const newFoodForm = () => {

  const [allFoods, setFoods] = useContext(FoodContext);
 
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories]= useState('');

  const addFood = (name, image, calories) => {
    const newListFood = allFoods;
    //console.log(newListFood)
    let newFood = { name: name, image: image, calories: calories };
    newListFood.push(newFood);
    setFoods([...newListFood]);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    addFood(name, image,calories);
    setCalories('');
    setImage('');
    setName('');
  }

 
    return (
      <form onSubmit={handleSubmit}>
        <div className="FormFood">
          <div className="field">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
                onChange={(e) => {setName(e.target.value)}}
                required
              />
          </div>
          <div className="field">
              <input
                className="input"
                type="number"
                placeholder="Calories"
                name="calories"
                defaultValue={calories}
                onChange={(e) => {setCalories(e.target.value)}}
                required
              />
          </div>
          <div className="field">
              <input
                className="input"
                type="text"
                placeholder="Url image"
                name="image"
                onChange={(e)=> {setImage(e.target.value)}}
                required
                defaultValue={image}
              />        
          </div>
          <button className="button is-success is-focused" type="submit" value="add food">Save</button>
          <a className="button is-danger is-focused">Cancel</a>
        </div>
      </form>
    );
  
}

export default newFoodForm;