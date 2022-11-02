import foods from '../foods.json';
import FoodBox from './FoodBox';


function FoodList() {
  return (
    <div>
      {foods.map((eachElement, index) => {
        return <FoodBox key={eachElement.name + index} eachItem={eachElement} />;
      })}
    </div>
  );
}

export default FoodList;
