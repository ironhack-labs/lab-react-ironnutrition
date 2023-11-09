function FoodBox(props) {
    return (
        props.foodsArray.map((foodObj, i)=>{
            return (
                <div key={i}>
                <p>{foodObj.name}</p>
             
                <img src={foodObj.image} />
             
                <p>Calories: {foodObj.calories}</p>
                <p>Servings {foodObj.servings}</p>
             
                <p>
                  <b>Total Calories: {foodObj.servings * foodObj.calories} </b> kcal
                </p>
             
                <button onClick={()=>{props.callbackToDelete(foodObj.name)}}>Delete</button>
                <hr />
              </div>
            )}))}
                

export default FoodBox;