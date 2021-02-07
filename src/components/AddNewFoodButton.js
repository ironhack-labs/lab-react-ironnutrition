import React from 'react';
import Form from "./form"

class AddNewFoodButton extends React.Component {
    state = {
        toggle: false,
    }

    activateForm = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {

        return(<div><button class="button is-info m-5" onClick={this.activateForm}>Add new Food</button>
        {this.state.toggle === true ? <Form /> : ""}</div>)
    }
}

export default AddNewFoodButton;