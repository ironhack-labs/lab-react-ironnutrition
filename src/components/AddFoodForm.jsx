import React, { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };
  const handleCalories = (event) => {
    setCalories(event.target.value);
  };
  const handleServings = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: Number(calories),
      servings: Number(servings),
      id: Math.floor(Math.random() * 700).toString(),
    };

    props.setFoods((valorActualDelEstado) => {
      let cloneFoodArr = JSON.parse(JSON.stringify(valorActualDelEstado));

      cloneFoodArr.unshift(newFood);
      console.log(cloneFoodArr);
      return cloneFoodArr;
    });
  };

  return (
    <div>
      <h1>AddFoodForm</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={handleName} value={name} />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" onChange={handleImage} value={image} />
        <label htmlFor="calories">Calories: </label>
        <input
          type="number"
          name="calories"
          onChange={handleCalories}
          value={calories}
        />
        <label htmlFor="servings">Serving: </label>
        <input
          type="number"
          name="servings"
          onChange={handleServings}
          value={servings}
        />

        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm; // Your code here
