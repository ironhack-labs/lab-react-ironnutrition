import { useState } from "react";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import Search from "./Search";
import { Row, Divider } from "antd";

function FoodList () {
    const [foodList, setFoodList] = useState(foodsJson)
    const [searchTerm, setSearchTerm] = useState("")

    const handleDelete = (id) => {
      const newFood = foodList.filter(food => (food.id !== id))
      setFoodList(newFood)
    }
  
    const addFood = (newFood) => {
      setFoodList([...foodList, newFood]);
    };

    const searchFilter = foodList.filter((food) => {
        return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <div>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm addFood={addFood}/>
            <Search 
            searchTerm={searchTerm}
            onSearch ={setSearchTerm}
            />
            <Divider>Food List</Divider>

            <Row style={{ width: "100%", justifyContent: "center" }}>
            {searchFilter.map((food) => (
            <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
                ))}
            </Row>
                
        </div>
    )
}

export default FoodList