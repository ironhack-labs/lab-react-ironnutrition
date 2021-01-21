import React from 'react';

class SelectedFoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: []
        };
    }

    render() {
        return (
            <>
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                <li>1 Pizza = 400 cal</li>
                <li>2 Salad = 300 cal</li>
                </ul>
                <strong>Total: 700 cal</strong>
            </>
        )
    };
};

export default SelectedFoodList;