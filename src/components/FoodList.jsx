import { useState } from "react";
import foodsJson from "../foods.json";
import AddFoodForm from "../components/AddFoodForm";
import FoodBox from "../components/FoodBox"



function FoodList(props) {

    const [foods, setFoods] = useState(foodsJson);

    const addFood = (newFood) => {
        console.log("adding food")
         setFoods([newFood,...foods]) }
    const deleteFood = (id) => { setFoods(foods.filter((element) => element.id !== id)) }

    let finalFoodArr = foods.filter((food) => {return food.name.toLowerCase().includes(props.searchTerm)})




    return (
        
        <div> 
            <AddFoodForm fnAddFood={addFood} />
            {finalFoodArr.length===0 && <h1>"No Food for you!!!!"</h1>}
            
            {finalFoodArr.map((element) => {
                return (
                    <FoodBox
                        key={element.name}
                        food={element}
                        cbf={deleteFood}
                    />)
            })}
        </div>
    )
}

export default FoodList; 