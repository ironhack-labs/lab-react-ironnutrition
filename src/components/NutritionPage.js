import foodsData from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from "./Search";
import { Divider, Row } from 'antd';
import { useState } from "react";


function NutritionPage() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
  const [foodList, setFoodList] = useState(foodsData);

  const [search, setSearch] = useState("");


  const handleCreateFood = (event) => {
    event.preventDefault()
    foodList.push({ name, image, calories, servings });
    setFoodList([...foodList]); 
  };

  console.log(foodList)
  
  return (
    <div className="NutritionPage">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        calories={calories}
        setCalories={setCalories}
        servings={servings}
        setServings={setServings}
        handleCreateFood={handleCreateFood}
      />
      <Divider>Search</Divider>
      <Search search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.filter((food) => food.name.toLowerCase().includes(search.toLowerCase())).map((food) => (
          <FoodBox key={food.name} {...food} />
        ))}
      </Row>
    </div>
  );
}

export default NutritionPage;
