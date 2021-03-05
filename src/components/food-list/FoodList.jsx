
import FoodBox from "../food-box/FoodBox"
import foods from "../../foods.json"




function FoodList ({food}) {
    return(
        <>        
        <div>
            {foods
            .map((food) => ( 
                <FoodBox 
                food = {food}> 
                </FoodBox> 
            ))}
                    
        </div>
        </>
    )
}

export default FoodList