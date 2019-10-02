import React, { Component } from 'react';

class AddButton extends Component {
    render() {
        return (
            <button className="button is-info" onClick={this.props.addItem}>+</button>
        );
    }
}

export default AddButton;