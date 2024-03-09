

 function FoodBox({food,deleteFood}) {
    /*const deleteFood = (foodItem) => {
    const updatedFood = food.filter((food) =>  food.id!= foodItem);
   setAllFoods(updatedFood);
  }
  const deleteFood = (food) => {
    let filteredFoods = food.filter((currentFood) => {
       return currentFood.name !== food.name
     });
     setAllFoods(filteredFoods)
   }*/
  
    
  
    return (
      <div className="food-card">
      
          <p>{food.name}</p>
  
          <img src={food.image} alt={food.name}/>
  
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
  
          <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
  
          <button onClick={deleteFood}>Delete</button>
          </div>
    )
  }
  export default FoodBox;