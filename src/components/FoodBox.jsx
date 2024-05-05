// Your code here

const FoodBox = ({ foodDetails , onDelete }) => {
  const {id , name, calories, image, servings } = foodDetails;
  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <div>
      <p>{name}</p>

      <img src={image} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>
          Total Calories: {servings * calories}{" "}
        </b>{" "}
        kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;
