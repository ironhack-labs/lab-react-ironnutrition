import React    from 'react';
import FoodBox  from './FoodBox'

function FoodList(props){
    return (
        <div>
            {
                props.foods.map((food, i) => {
                    return  <FoodBox 
                                key={i}
                                food={food}
                                id={i}
                                addCalories={props.addCalories}
                            />
                })
            }
        </div>    
    )
}


export default FoodList;