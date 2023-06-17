import React from "react";

//props.addFood();

function AddFoodForm(props) {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [calories, setCalories] = React.useState("");
  const [servings, setServings] = React.useState("");

  return (
    <form
      onSubmit={function (event) {
        event.preventDefault(); //empeche le refresh de la page

        const obj = {
          id: id,
          name: name,
          image: image,
          calories: calories,
          servings: servings,
        };

        console.log("obj addfood", obj);
        props.addFood(obj);
      }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="image"
          value={image}
          onChange={function (event) {
            setImage(event.target.value);
          }}
        />
      </label>
      <label>
        Calories
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={function (event) {
            setCalories(event.target.value);
          }}
        />
      </label>
      <label>
        Servings
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={function (event) {
            setServings(event.target.value);
          }}
        />
      </label>
      <button>Add Food</button>
    </form>
  );
}

export default AddFoodForm;
