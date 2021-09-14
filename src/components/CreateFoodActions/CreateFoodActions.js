import React, { Component } from "react";

import './CreateFoodActions.css';

class CreateFoodActions extends Component {
    state = {
    showForm: false,
    food : {
        name: '',
        image: '',
        calories: 0,
    },
  }

    handleChange = event => {
        const {name, value} = event.target;

        const updatedForm = {...this.state.food, [name]: value};
        
        this.setState({food: updatedForm});
    };

    handleToggleForm = () => {
        this.setState ({ showForm: !this.state.showForm});
    };

    handleCreateFood = () => {
        const {addFood} = this.props;

        addFood(this.state.food);

        this.setState({
        showForm: false,
        food : {
                name: '',
                image: '',
                calories: 0,
            },

        })
    };

    render() {
        const { showForm} = this.state;
        const {name, image, calories} = this.state;
        return (
        <div>
            <button onClick={this.handleToggleForm}>
            {showForm ? ('Close Form') : ('Create New Food')}
            </button>
        {showForm && (
         <form>
            <input type='text' name='name' id='Food name' value={name} onChange={this.handleChange} />
            <input type='text' name='image' id='Food image URL' value={image} onChange={this.handleChange}/>
            <input type='number' name='calories' id='Food calories amount' value={calories} onChange={this.handleChange}/>
        <button type="button" onClick={this.handleCreateFood}> Create New Food </button>
        
        </form>
        )}
        </div>
        );
    };
        
    };

export default CreateFoodActions;