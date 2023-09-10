import "./AddFoodForm.css";

function AddFoodForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, image, calories, servings } = event.target;

    props.onAdd({
      name: name.value,
      image: image.value,
      calories: calories.value,
      servings: servings.value,
    });

    name.value = "";
    image.value = "";
    calories.value = "";
    servings.value = "";
  };

  return (
    <div className="AddFoodForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="off" />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" autoComplete="off" />
        <label htmlFor="calories">Calories</label>
        <input type="number" name="calories" id="calories" autoComplete="off" />
        <label htmlFor="servings">Servings</label>
        <input type="number" name="servings" id="servings" autoComplete="off" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
