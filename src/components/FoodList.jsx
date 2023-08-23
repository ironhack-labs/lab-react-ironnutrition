import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import { Row, Divider } from "antd";



function FoodList (){

    const [foods, setFoods] = useState(foodsJson)


    const deleteFood = (foodId) =>{
        const filteredFoods = foods.filter ((food)=>{
            return food.id !== foodId
        })
        setFoods(filteredFoods);

    }
    
    const addNewFood = (newFood)=>{
        const updatedFoods = [...foods, newFood];
        setFoods(updatedFoods);
    }


    return(
        <div>
      
            <Row>
            <Divider>Food List</Divider>
            {foods.length >0 ? foods.map((food)=>{
                return(
                    
                    <FoodBox 
                    key = {food.id}
                    food = {food}
                    clickToDelete = {deleteFood}    
                    />
                )
            }): <p> 😔 Oops! There is no more content to show. 😔 </p>   
            }
            </Row>
            <AddFoodForm 
            addNewFood = {addNewFood}
            />
        </div>
    )
}

export default FoodList;