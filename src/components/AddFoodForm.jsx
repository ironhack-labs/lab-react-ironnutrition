import { useState } from "react";
function AddFoodForm({ onAddFood }) {
    const [newFood, setNewFood] = useState({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  
    /*const handleChange = (e) => {
      const { name, value } = e.target;
      setNewFood((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };*/
    const handleChange = e => { 
        setNewFood({
          ...newFood,
          [e.target.name]: e.target.value,
        });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddFood({
        id: Date.now(),
        name: newFood.name,
        image: newFood.image,
        calories: newFood.calories,
        servings: newFood.servings,
      });
      setNewFood({
        name: "",
        image: "",
        calories: "",
        servings: "",
      });
    };
  
    return (
      <div>
        <h2>Add Food Entry</h2>
        <form onSubmit={handleSubmit} className="Form">
          <label>
            Name</label>
            <input
              name="name"
              type="text"
              
              value={newFood.name}
              onChange={handleChange}
            />
          
          <br></br>
          <br></br>
  
          <label>
            Image</label>
            <input
              name="image"
              type="url"
              
              value={newFood.image}
              onChange={handleChange}
            />
          
          <br></br>
          <br></br>
  
          <label>
            Calories</label>
            <input
              name="calories"
              type="number"
              
              value={newFood.calories}
              onChange={handleChange}
            />
          
          <br></br>
          <br></br>
  
          <label>
            Servings</label>
            <input
              name="servings"
              type="number"
              
              value={newFood.servings}
              onChange={handleChange}
            />
          
          <br></br>
          <br></br>
  
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  export default AddFoodForm;
