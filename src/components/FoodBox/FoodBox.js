import React from 'react';
import './FoodBox.css';

class FoodBox extends React.Component {
    render() {
        console.log(this.props.food);
        return (
            <div className="box">
                {this.props.food}
            </div>
        );
    }
}

export default FoodBox;
