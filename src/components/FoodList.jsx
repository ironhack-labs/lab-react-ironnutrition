import React from 'react'
import { Row } from 'antd';
import FoodBox from './FoodBox';

export default function FoodList({ foods, onRemove }) {
    return (
        <>
            <Row style={{ width: '100%', justifyContent: 'center' }}>
                {foods.map((foods) => (
                    <FoodBox food={foods} key={foods.id} onRemove={onRemove} />
                ))}
            </Row>
        </>
    )
}
