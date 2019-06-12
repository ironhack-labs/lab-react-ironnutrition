import React, { Component } from 'react';

class AddButton extends Component {

    
    constructor(props){
        super(props);
    }
    
    handleAddFunction = () => {
        this.props.onClick(this.props.idx, this.props.quantity)
    }
    
    render() {
        return(
            <button onClick={this.handleAddFunction} className="button is-info">+</button>
        )
    }
}

export default AddButton;