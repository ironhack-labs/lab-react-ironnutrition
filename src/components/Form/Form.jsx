import React from 'react';
import './Form.css';

const initialState = {
    image: '',
    name: '',
    calories: '',
    error: false
}

class Form extends React.Component {
    state = {
        ...initialState
    };

    onHandleChange = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    resetForm = () => {
        this.setState({...initialState});
    }

    onSubmit = (event) => {
        const {image, name, calories} = this.state;
        event.preventDefault();

        if(image && name && Number(calories) > 0){
            this.props.addFood({
                image,
                name,
                calories: Number(calories)
            });

            this.props.hideForm();

            this.resetForm();
        } else {
            this.setState({error: true})
        };
    };

    render(){
        const {image, name, calories, error} = this.state;

        return (
            <div className="new-food-div">
                <div className="new-food-form">
                  <form onSubmit={this.onSubmit}>
                    <label className='mt-2' htmlFor="image">Image</label>
                    <input
                        type="file"
                        value={image}
                        name="image"
                        onChange={this.onHandleChange}
                    />

                    <label className='mt-2' htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={this.onHandleChange}
                    />

                    <label className='mt-2' htmlFor="calories">Calories</label>
                    <input
                        type="number"
                        value={calories}
                        name="calories"
                        onChange={this.onHandleChange}
                    />

                    { error &&
                        <p className='text-danger'>Invalid Form</p>
                    }

                    <button className='btn btn-primary mt-2'>Submit</button>
                  </form>
                  <button className="close-form-btn" onClick={this.props.hideForm}><i className="bi bi-x-circle"></i></button> 
                </div>
            </div>
        )
    }
}

export default Form;