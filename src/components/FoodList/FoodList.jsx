import React from 'react';
import { Row } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import FoodBox from '../FoodBox/FoodBox';

function FoodList({foods, deleteFood}) {
  console.log(foods);
  return (
    
    <Row justify='center' style={{ width: '100%', justifyContent: 'center' }}>
      {
        foods.length > 0 ? (
          foods.map((food) => {
            return (
              <FoodBox key={food.name} {...food} onDelete={() => deleteFood(food.name)} />
            )
          })
        ) : (
          <div>
            <h2>Oops! There is no more content to show</h2>
            <CloseCircleOutlined style={{ fontSize: '86px'}}/>
          </div>
          
        )
      }
    </Row>
  )
}

export default FoodList;