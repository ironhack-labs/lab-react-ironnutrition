import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodsJason)
  
  const deleteItem = ( (foodItem) => {
      const newwFoodList = foods.filter((foodDetails)=>foodDetails.id !==foodItem.id)
      setFoods(newwFoodList)
    

  })
  
  
  return (
   <FoodBox 
   key={foods.id}
   foodArray={foods}/>
  );
}

export default App;
