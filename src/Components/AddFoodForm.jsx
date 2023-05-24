import {useState} from 'react';

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(200);
    const [servings, setServings] = useState(1);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newFood = {
            name, 
            image, 
            calories, 
            servings
        };

        props.addNewFood(newFood);

        setName("");
        setImage("");
        setCalories(200);
        setServings(1);
    }
  return (
    <div className="add-food">
        <h4>Add a Food</h4>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
                <input type="text"
                name="name"
                value={name}
                onChange={handleNameInput}/>
            <label>Image:</label>
                <input type="text"
                name="image"
                value={image}
                onChange={handleImageInput}/>
            <label>Calories:</label> 
                <input type="text"
                name="calories"
                value={calories}
                onChange={handleCaloriesInput}/>
            <label>Servings:</label> 
                <input type="text"
                name="servings"
                value={servings}
                onChange={handleServingsInput}/>
            <button type="submit">Add a Food</button>
        </form>
    </div>
  )
}

export default AddFoodForm