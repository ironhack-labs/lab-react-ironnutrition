import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class TodaysFood extends Component {
    render() {
        return (
            <div>
                <li>{`${this.props.quantity} ${this.props.name} = ${this.props.calories}cal`} <i onClick={() => {
              this.props.deleteItem(this.props.index); }} ><FontAwesomeIcon icon={faTrash} /></i></li>
            </div>
        )
    }
}
