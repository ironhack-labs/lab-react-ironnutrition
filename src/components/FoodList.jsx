import React from 'react'
import { Row } from 'antd';
import FoodBox from './FoodBox';

export default function FoodList({ foods }) {
    return (
        <>
            <Row style={{ width: '100%', justifyContent: 'center' }}>
                {foods.map((food) => (
                    <FoodBox food={food} key={food.id} />
                ))}
            </Row>
        </>
    )
}
