export default function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  return (
    <div className="card">
      <p>{name}</p>
      <img src={image} alt="" width={100} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>

      <button onClick={() => { props.deleteCallback(name); }} > Delete </button>
    </div>
  );
}
