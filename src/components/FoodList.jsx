import AddFoodForm from "./AddFoodForm"
import FoodBox from "./FoodBox"

function FoodList ({food, callbackToDelete, handleAddFood}){
    return (
        <div className="App">
        {food.map((food) => (
          <div key={food.id}>
            <FoodBox food={food}
            callbackToDelete={callbackToDelete}
             />
          </div>
        ))}
        <AddFoodForm onAddFood={handleAddFood} />
      </div>
    )

}


export default FoodList;