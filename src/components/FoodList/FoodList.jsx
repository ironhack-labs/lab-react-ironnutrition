import { Row, Col, Divider } from 'antd';
import FoodCard from '../FoodCard/FoodCard';

function FoodList ({ foods, onDeleteFood }) {
 return (
   <>
     <Divider>Food List</Divider>
     <Row>
       {foods.map((food) => (
         <Col span={8} key={food.id}>
           <FoodCard
             title={food.name}
             img={food.image}
             calories={food.calories}
             servings={food.servings}
             onDelete={() => onDeleteFood(food.id)}
           />
         </Col>
       ))}
     </Row>
   </>
 ); 
}

export default FoodList;