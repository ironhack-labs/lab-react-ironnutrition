import React from 'react';

class AddFood extends React.Component {
    state = {
        name: '',
        numberOfCalories: '',
        image: '',
    }


    



    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }



    handleFormSubmit = (event) => {
        event.preventDefault(); //prevents that the page is realoded
        console.log(this.state);
        this.props.addTheFood(this.state);
        this.setState({
            name: '',
            numberOfCalories: '',
            image: '',
        });
    };

    render() {
        const { name, numberOfCalories, image } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={name} />

                <label>Number of calories</label>
                <input type="text" name="numberOfCalories" onChange={this.handleChange} value={numberOfCalories} />

                <label>Image</label>
                <input type="text" name="image" onChange={this.handleChange} value={image} />

                <button type="submit">Create</button>
            </form>
        )
    }
}

export default AddFood;