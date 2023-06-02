import { useState } from "react";

function AddFoodForm({ allFoods , setFoods }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    function handleAddFood(event) {
        event.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings,
        };
        setFoods([newFood, ...allFoods]);
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
      <>
          <div className="food-form">
            <h3>Add a new food item</h3>
            <form onSubmit={handleAddFood}>
                <input type="text" value={name} placeholder="name" onChange={(event) => {setName(event.target.value)}} />
                <input type="text" value={image} placeholder="image url" onChange={(event) => {setImage(event.target.value)}} />
                <input type="text" value={calories} placeholder="calories" onChange={(event) => {setCalories(event.target.value)}} />
                <input type="text" value={servings}  placeholder="servings" onChange={(event) => {setServings(event.target.value)}} />
                <button type="submit">ADD ITEM</button>
            </form>
        
     
         </div>
      </>
  
    );
  }
  
  export default AddFoodForm;
