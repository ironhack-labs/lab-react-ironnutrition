
import FoodBox from "./FoodBox";

function FoodBoxGrid({foodList, setCal}) {
    return (
        <>
        <div className="column">
          {
            foodList.map( (food, index) => {
              return <FoodBox key ={index} { ...food} setCal/>
              })
          }
        </div>
        </>
    );
};


export default FoodBoxGrid;