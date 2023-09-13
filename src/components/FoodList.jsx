import FoodBox from "./FoodBox";

function FoodList(props){
    return (
        <section className="FoodList">
        
        {props.foods.map((food, index) =>{
          return (
          <FoodBox key={index} food={food} callbackToDeleteFood={props.callbackToDelete}/>
        )
        })}
      </section>  
    )
}

export default FoodList;