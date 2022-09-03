function FoodBox({ name, calories, image, servings, setFoods, foods }) {
  const handleDelete = (foodName) => setFoods(foods.filter(food => food.name !== foodName))
  return (
    <div className="food-box col-3">
      <div className="card my-1 mx-1">
        <h4 className="p-3 m-0">{name}</h4>
        <hr/>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-title">Calories: {calories}</p>
          <p className="card-text">Serving: <strong>{servings}</strong></p>
          <p className="card-text"><strong>Total Categories: </strong><strong>{calories * servings} kcal</strong></p>
          <button onClick={() => handleDelete(name)} className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default FoodBox