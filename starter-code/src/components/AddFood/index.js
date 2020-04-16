import React, { Component } from 'react';
import Form from '../Form';

class AddFood extends Component {

    state = {
        isVisible: false
    }

    handleVisibility = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render(){
        const { addFood } = this.props;
        const { isVisible } = this.state;
        return (
            <div>
                <button className="btnForm" onClick={this.handleVisibility}> Add a Food </button>
                {isVisible && <Form addFood={addFood} visibility={this.handleVisibility}/>}
            </div>
        )
    }
}

export default AddFood;