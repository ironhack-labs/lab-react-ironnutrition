import React from 'react';
import FoodBox from './FoodBox'

const FoodList = ({foods}) => <div className="column">{foods.map((food,index) => <FoodBox key={index}{...food} />)}</div>;

export default FoodList;