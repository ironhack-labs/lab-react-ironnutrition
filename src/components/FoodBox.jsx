// Your code here
function FoodBox(props) {     
   
    
    return (
       props.foodDetails.map((element) => {
        return (
            <div key={element.id}>
            
            <p>{element.name}</p>

            <img src={element.image} />

            <p>{element.calories}</p>
            <p>{element.servings}</p>

            <p>
                <b>Total Calories: {element.servings} * {element.calories} </b> kcal
            </p>

            <button onClick={()=> {props.callBackToDelete(element.id)}}>Delete</button>
        </div>

        )

       })
        
    )
}

export default FoodBox;



















