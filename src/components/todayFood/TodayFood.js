import TodayFoodItem from './TodayFoodItem';
const TodayFood = ({ foods, deleteFood }) => {   
    
    return (
        <ol>
        {foods > 0 ? (
            foods.map((food) => (
                <TodayFoodItem
                key={food.id} {...food} onDelete={() => deleteFood(food.id)}
                />
            ))
            ) : (
            <p className="text-muted">Your daily foods here</p>
            )}
       
    </ol>
);

}
export default TodayFood;