import './FoodList.css';
import FoodBox from '../food-box/FoodBox';

function FoodList({ foods, setFoods }) {
  return (
    <div className="food-list row justify-content-start">
      {
        foods.length ? 
          foods.map(food => <FoodBox key={food.name} {...food} setFoods={setFoods} foods={foods}/>) : 
          <div className="container d-flex flex-column align-items-center text-center no-data">
            <p className="fs-1 mt-4 mb-0"><strong>Oops!</strong> There is no more content to show</p>
            <img src="no-data.png" className="no-data-image"  alt="Not Found"/>
          </div>
      }
    </div>
  );
}

export default FoodList;