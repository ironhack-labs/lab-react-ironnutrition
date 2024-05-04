import './FoodBox.css'
import { Card, Col, Row, Button } from "antd";

const FoodBox = ({ id, name, image, calories, servings, handleDelete }) => {
    return (
        <div className="food-box">
            <Card title={name} style={{ width: 300, margin: 10 }}>
                <img src={image} height={60} />
                <p>Calories: {calories}</p>
                <p>Servings {servings}</p>
                <p><b>Total Calories: {calories * servings} </b> kcal</p>
                <Button type="primary" onClick={() => handleDelete(id)}> Delete </Button>
            </Card>
        </div>)
}

export default FoodBox