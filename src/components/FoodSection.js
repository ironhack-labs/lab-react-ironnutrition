import FoodBox from './FoodBox';

import { Row } from "antd"

function FoodSection(props) {

    const { filteredFood, setFoods, foods } = props

    return(
        <Row style={{ width: '100%', justifyContent: 'center' }}>
            {filteredFood.map((food) => {
                return <FoodBox food={food} foods={foods} setFoods={setFoods}/>;
            })}
        </Row>
    )
}

export default FoodSection;