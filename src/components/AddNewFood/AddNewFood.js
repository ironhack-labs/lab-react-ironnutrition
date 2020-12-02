import React from 'react'
class AddNewFood extends React.Component {
    state = {
        name: "",
        calories: 0,
        image: ""
    }
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        // Prevent the page from Submit
        event.preventDefault();
        const newDish = this.state;
        // Save the dish in the array of foods
        this.props.createNewDish(newDish);
        // Clear the form
        this.setState({ name: "", calories: 0, image: "" })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label> Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                    <br />
                    <label> Number of Calories: </label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleInput} />
                    <br />
                    <label> Image: </label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleInput} />
                    <br />
                    <button type="submit">Add New Dish</button>
                </form>
            </div>
        )
    }
}
export default AddNewFood;