import React, {Component} from 'react';
import FormInput from './FormInput';

class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        let {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.newFood({
            name: this.state.name || 'no name',
            calories: this.state.calories || 'not informed',
            image: this.state.image || 'https://media.giphy.com/media/DtXfTSHi6mHFS/giphy-facebook_s.jpg',
        })

        this.props.handleForm();
    }


    render() { 
        return (
            <form className="form--add-food animated fadeInDown" onSubmit={this.handleSubmit} >
                <FormInput handleChange={this.handleChange} name='name' type='text'  />
                <FormInput handleChange={this.handleChange} name='calories' type='number'  />
                <FormInput handleChange={this.handleChange} name='image' type='text'  />
                <button className="button is-success">Add</button>
            </form>
        );
    }
}

export default AddFood;