function FoodBox(props) {

const {name, image, calories, servings} = props.food;

  return (
    <div className="FoodBox">
      <p>{name}</p>

      <img src={image} />

      <p>Calories: {calories} </p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button>Delete</button>
    </div>
  );
}

export default FoodBox;