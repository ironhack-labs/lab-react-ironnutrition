import { FoodBox } from ".."

function FoodList(){
const foodsArray = [
    {
        image: "https://i.imgur.com/eTmWoAN.png",
        name: "Pizza",
        cal: "400 cal",
    },
    {
        image:"https://i.imgur.com/DupGBz5.jpg",
        name: "Salad",
        cal: "150 cal"
    },
    {
        image:"https://i.imgur.com/hGraGyR.jpg",
        name: "Sweet Potaoe",
        cal: "120 cal"
    },
    {
        image:"https://i.imgur.com/93ekwW0.jpg",
        name: "Gnocchi",
        cal: "500 cal"
    },
]
return(

    <div className="FoodBox">
        {foodsArray.map((food) =>{
            return <FoodBox
            food={food}
            />
        })}
    </div>
)
}

export default FoodList;