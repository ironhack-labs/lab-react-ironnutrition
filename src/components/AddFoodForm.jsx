import { useState } from "react"

// Your code here
const AddFoodForm = ({allFoodsList, setAllFoods}) => {
    const[addFood, setAddFood] = useState({
      name: "",
      image: "",
      calories: 0,
      servings: 0
    })
    const handleFood = (event) => {
      setAddFood({...addFood,[event.target.name]:event.target.value});

    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      setAllFoods([...allFoodsList, addFood])
  };

     return (
        <div>
            <h1>Add Food Entry</h1>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input name="name" value={addFood.name} type="text" onChange={handleFood}
            />
            <br />

            <label>Image:  </label>
            <input name="image" value={addFood.image} type="text" onChange={handleFood}
            />
            <br />

            <label>Calories: </label>
            <input name="calories" value={addFood.calories} type="number" onChange={handleFood}
            />
            <br />

            <label>Servings: </label>
            <input name="servings" value={addFood.servings} type="number" onChange={handleFood}
            />
            <br />
            <button type="submit">Create</button>

            </form>
        </div>
    )
}
export default AddFoodForm
