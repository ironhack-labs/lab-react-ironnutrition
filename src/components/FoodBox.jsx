
const FoodBox = ( {food, onDelete} ) => {
    const { name, calories, image, servings } = food;


    const handleDelete = () => {
        onDelete(food.id)
    };

    return (
        <div className="food-box">
        <p className="food-name">{name}</p>
        <img className="food-image" src={image} alt={name} />
        <p className="food-info">Calories: {calories}</p>
        <p className="food-info">Servings: {servings}</p>
        <p className="food-info">
          <b>Total Calories: {servings * calories} kcal</b>
        </p>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    )
}

export default FoodBox;