import { Row, Col } from 'antd'
import FoodBox from '../FoodBox/FoodBox';


function FoodList({ foods, DeleteFood }) {
 return (
    <Row>
        {foods.map(food =>(
            <Col span={8} key={food.image}>
                <FoodBox onDelete={() => DeleteFood (food.name)} {...food}/> 
            </Col>
        ))}
    </Row>     
  );
}

export default FoodList;


// el FoodBox es la card tengo que hacer esto =  {...food} para que pueda ir iterando sino no encuentra nada
// span = {8} es el son 8 filas y 3 columnas