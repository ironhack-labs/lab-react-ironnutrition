import FeedbackMessage from './FeedbackMessage';
import FoodBox from './FoodBox';
import { Divider, Row } from 'antd';

function Content({ food, searchInput, handleClickDelete, getFoodBack }) {
  return (
    <>
      <Divider />
      <Divider style={{ fontSize: '32px' }} orientation="center">
        Food List
      </Divider>
      {food.length === 0 && <FeedbackMessage {...{ getFoodBack }} />}
      <Row justify="space-evenly">
        {food
          // eslint-disable-next-line array-callback-return
          .filter((food) => {
            if (searchInput === '') {
              return food;
            } else if (
              food.name.toLowerCase().includes(searchInput.trim().toLowerCase())
            ) {
              return food;
            }
          })
          .map((food) => {
            return (
              <FoodBox
                key={food._id}
                handleClickDelete={handleClickDelete}
                food={{
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings,
                }}
              />
            );
          })}
      </Row>
    </>
  );
}
export default Content;
