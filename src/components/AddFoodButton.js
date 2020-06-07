import React, { Component } from 'react';
import AddFoodForm from './AddFoodForm';

class AddFoodButton extends Component {
    state = {
        isFormOpen: false
    }

    showFormHandler = (event) => {
        event.preventDefault();

        if(this.state.isFormOpen === false){
            this.setState({
                isFormOpen: true
            });
        }
    }

    cancelFormHandler = (event) => {
        if(this.state.isFormOpen === true){
            this.setState({
                isFormOpen: false
            });
        }
    }

    render(){
        return(
            <div>
                <button className='button is-info' onClick={this.showFormHandler}>Add new Food</button>
                {this.state.isFormOpen && <AddFoodForm />}
            </div>
        )
    }
}

export default AddFoodButton;