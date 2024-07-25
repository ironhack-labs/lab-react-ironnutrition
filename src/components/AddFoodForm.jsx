

const AddFoodForm = ({ onAddFood }) => {
  const [formState, setFormState] = useState({
    name: "",
    image: "",
    calories: "",
    servings: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      ...formState,
      calories: Number(formState.calories),
      servings: Number(formState.servings)
    };
    onAddFood(newFood);
    setFormState({
      name: "",
      image: "",
      calories: "",
      servings: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={formState.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Calories:
        <input
          type="number"
          name="calories"
          value={formState.calories}
          onChange={handleChange}
        />
      </label>
      <label>
        Servings:
        <input
          type="number"
          name="servings"
          value={formState.servings}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;