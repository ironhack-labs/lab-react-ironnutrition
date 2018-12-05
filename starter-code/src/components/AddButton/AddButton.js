import React from 'react';
import './AddButton.css';

class AddButton extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            display: "closed",
            newFood: {
                name: "",
                calories: 0,
                image: "",
                quantity: 0
            }
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    showForm() {
        if (this.state.display === 'closed') {
            this.setState({ ...this.state, display: "open" })
        } else {
            this.setState({ ...this.state, display: "closed" })
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        let updatedNewFood = {...this.state.newFood};
        updatedNewFood[e.target.name]=e.target.value;

        this.setState({ ...this.state, newFood: updatedNewFood});
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        this.props.addFoodHandler(this.state.newFood);
        
        let resetFood = {
            name: "",
            calories: 0,
            image: "",
            quantity: 0
        }
        this.setState({...this.state, newFood : resetFood });
    };


    render() {

        return (
            <div className="AddButton">
                <button id="switch" onClick={() => {this.showForm() }}>Add Food</button>
                <form className={this.state.display} onSubmit={this.handleFormSubmit} >
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="name" onChange={(e) => { this.changeHandler(e) }} />
                    <label>Calories:</label>
                    <input type="number" name="calories" placeholder="100" onChange={(e) => { this.changeHandler(e) }} />
                    <label>Image:</label>
                    <input type="text" name="image" placeholder="" onChange={(e) => { this.changeHandler(e) }} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }


}

export default AddButton