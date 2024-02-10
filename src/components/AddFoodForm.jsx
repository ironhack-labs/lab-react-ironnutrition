// Your code here
import { useState } from "react";

function AddFoodForm ({onAddFood}) {

    const [newFood, setNewFood] = useState({name:"", image:"", calories:"", servings:""});


    const handleValueChanges = e => { 
        setNewFood({
          ...newFood,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood({
      id: Date.now(),
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image,
      servings: newFood.servings
    });
    setNewFood({name:"", image:"",calories:"", servings:""});
  };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              placeholder="Pizza"
              value={newFood.name}
              onChange={handleValueChanges}
            />
          </label>
    

          <label>
            Image:
            <input
              type="url"
              name="image"
              required
              placeholder="Food Image"
              value={newFood.image}
              onChange={handleValueChanges}
            />
          </label>


          <label>
            Calories:
            <input
              type="text"
              name="calories"
              required
              placeholder="6"
              value={newFood.calories}
              onChange={handleValueChanges}
            />
          </label>
    
    
          <label>
            Servings:
            <input
              type="text"
              name="servings"
              required
              placeholder="4"
              value={newFood.servings}
              onChange={handleValueChanges}
            />
          </label>
    
          <button>Create</button>
        </form>
      );
}


export default AddFoodForm