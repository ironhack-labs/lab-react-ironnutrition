
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {
    const {foodInfo, deleteFunc} = props;

return foodInfo.length > 1 ? (
    foodInfo.map((elem) => {
        return (
            <Col>
            <Card
              title={elem.name}
              style={{ width: 230, height: 300, margin: 10 }}
            >
              <img src={elem.image} height={60} alt="food" />
              <p>Calories: {elem.calories}</p>
              <p>Servings: {elem.servings}</p>
              <p>
                <b>Total Calories: {elem.calories * elem.servings} </b> kcal
              </p>
              <Button onClick={() => deleteFunc(elem.name)} type="primary"> Delete </Button>
            </Card>
          </Col>

        )
      })
  )
: (
        <div>
        <h1>Ops, you deleted everything! </h1>
        <img src="https://cdn-icons-png.flaticon.com/512/43/43533.png" height={60} alt="" />
        </div>
      )

    }

export default FoodBox