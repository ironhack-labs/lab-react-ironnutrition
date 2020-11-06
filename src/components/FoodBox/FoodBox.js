import React from 'react';
import './FoodBox.css';

class FoodBox extends React.Component {
    render() {
        return (
            <div className="box">
                {this.props.food}
            </div>
        );
    }
}

export default FoodBox;
