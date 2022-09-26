import { Row, Col } from 'antd'
import FoodCard from '../FoodCard/FoodCard'

function FoodsList ({ foods, onDeleteFood }) {
    return(
        <Row  style={{marginTop:'5rem'}}>
            {foods.map(food => {
                return(
                <div style={{marginLeft:'5rem'}}>
                    <Col span={5} Key={food.id}>
                        <FoodCard
                            onDelete={() => onDeleteFood(food.id)} {...food}
                        />
                    </Col>
                </div>
            )})}
        </Row>
    )
}

export default FoodsList