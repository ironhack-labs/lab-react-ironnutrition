import React from 'react'
import { Row } from 'antd';
import FoodBox from './FoodBox';

 function FoodList({ foods, onRemove }) {
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


export default FoodList;
