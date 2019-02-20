import React from 'react';

export default class PriceRender extends React.Component {
    render() {
        return (
            <li>{this.props.quantity} {this.props.name} = {this.props.calories} Cal</li>
        )
    }
}