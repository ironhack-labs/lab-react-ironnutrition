import React, { Component } from 'react';
import { FoodListItem } from './FoodListItem';

export class FoodList extends Component {
    constructor() {
        super();
        this.state = {
            listItems: [],
        }
    }
    render() {
        console.log(this.props.listItems);
        return(
            <ul>
            {this.props.listItems}
        </ul>
        )
    }
}
