import React from 'react';
import foods from '../foods.json';

class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: foods,
        };
    }

    render() {
        return (
            <div className="column">
                {this.props.children}
            </div>
        )
    }
}

export default FoodList;