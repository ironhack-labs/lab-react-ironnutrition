import { Row } from 'antd';
import FoodBox from './FoodBox';

function FoodList({ currentFoodList, changeFoodList, currentFilter }) {
  return (
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {currentFoodList
        .filter((food) => food.name.toLowerCase().includes(currentFilter))
        .map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              removeFoodOnDelete={changeFoodList}
            />
          );
        })}
    </Row>
  );
}

export default FoodList;
