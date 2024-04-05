import { useState } from "react";

function AddFoodForm({ addFood }) {
console.log("AddFoodForm: addFood prop", addFood);
const [image, setImage] = useState("");
const [name, setName] = useState("");
const [calories, setCalories] = useState("");
const [servings, setServings] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		addFood({image, name, calories, servings});
		setImage("");
		setName("");
		setCalories(0);	
		setServings(0);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Add New Food</h3>
			<label  htmlFor="image">Image: </label>
			<input 
			type="url" 
			name="image" 
			value={image || ""}
			onChange={(e) => setImage(e.target.value)} /> <br />
			<label  htmlFor="name">Name: </label>
			<input 
			type="text" 
			name="name"
			value={name}
			onChange={(e) => setName(e.target.value)} required /> <br />
			<label  htmlFor="calories">Calories: </label>
			<input 
			type="number" 
			name="calories" 
			value={calories}
			onChange={(e) => setCalories(e.target.value)} required /> <br />
			<label  htmlFor="servings">Servings: </label>
			<input 
			type="number" 
			name="servings"
			value={servings}
			onChange={(e) => setServings(e.target.value)} required /> <br />
			<button type="submit">Create</button>
		</form>
	)
}

export default AddFoodForm