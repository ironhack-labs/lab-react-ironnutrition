function FoodBox({ singleFood }) {
  return (
    <div className="food-box">
          <h3>{singleFood.name}</h3>
          <img
            src={singleFood.image}
            alt={singleFood.name}
            style={{ height: '50px' }}
          />
          <p>Calories: {singleFood.calories}</p>
          <p>Servings: {singleFood.servings}</p>
          <p style={{ fontWeight: "bold"}}>Total calories: {singleFood.servings * singleFood.calories} kcal</p>
    </div>
  );
}

export default FoodBox;
