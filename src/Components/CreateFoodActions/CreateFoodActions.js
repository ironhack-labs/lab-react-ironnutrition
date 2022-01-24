import React, { Component } from 'react';
class CreateFoodAction extends Component {

    state = {
        showForm: false,
        food: {
            name: '',
            image: '',
            calories: '',
        },
    }

    handleChange = event => {
        const { name, value } = event.target;

        const updateForm = { ...this.state.food, [name]: value};

        this.setState( { food: updateForm } );
    }

    handleToogleForm = () => {
        this.setState( { showForm: this.state.showForm } );
    }

    handleCreatefood = () => {
        const { addFood } = this.props;
        addFood(this.state.food);

        this.setState({
            showForm: false,
            food: {
                name: '',
                image: '',
                calories: '',
            }
        })
    }

    render() {
        const {showForm} = this.state;
        const { name, image, calories } = this.state.food;
        return (
            <div>
                <button onClick={this.handleToogleForm}>
                    {showForm ? (
                        "Closed Form" 
                    ): ("Create a food")};
                </button>
                {showForm && (
                <form>
                    <input type='text' name='name' placeholder="Food name" value={name} onChange={this.handleChange} />
                    <input type='text' name='image' placeholder="Food image url" value={image} onChange={this.handleChange} />
                    <input type='text' name='calories' placeholder="Food calories amount" value={calories} onChange={this.handleChange} />
                    <button> Create food!</button>
                </form>
                )}
            </div>
        );
    }
};
export default CreateFoodAction;