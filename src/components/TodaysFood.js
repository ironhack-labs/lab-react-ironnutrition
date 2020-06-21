import React, { Component } from 'react';

export default class TodaysFood extends Component {
    render() {
        return (
            <div>
                <li>{`${this.props.quantity} ${this.props.name} = ${this.props.calories}cal`} <i onClick={() => {
              this.props.deleteItem(this.props.index); }} >delete </i></li>
            </div>
        )
    }
}
