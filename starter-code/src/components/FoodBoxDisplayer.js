import React from 'react';
import FoodBox from './FoodBox';

export default class FoodBoxDisplayer extends React.Component {
    render() {
        return (
            <li>
                {
                    this.props.foodBoxs.map((foodBox, idx) =>
                        <FoodBox
                            image={foodBox.image}
                            name={foodBox.name}
                            calories={foodBox.calories}
                            key={idx}
                        />
                    )
                }
            </li>
        )
    }
}