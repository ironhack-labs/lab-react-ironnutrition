export default function FoodBox(props) {
  return props.food.map((element) => {
    return (
      <div key={element.id}>
        <p>{element.name}</p>

        <img className="food-img" src={element.image} />

        <p>Calories: {element.calories}</p>
        <p>Servings {element.servings}</p>

        <p>
          <b>Total Calories: {element.servings * element.calories} </b> kcal
        </p>

        <button
          onClick={() => {
            props.delete(element.id);
          }}>
          Delete
        </button>
      </div>
    );
  });
}
