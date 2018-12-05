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
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {

        return (
            <div className="AddButton">
                <button id="switch" onClick={() => { this.showForm() }}>Add Food</button>
                <div className={this.state.display} >
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="name" onChange={(e) => { this.changeHandler(e) }} />
                    <label>Calories:</label>
                    <input type="number" name="calories" placeholder="100" onChange={(e) => { this.changeHandler(e) }} />
                    <label>Image:</label>
                    <input type="text" name="image" placeholder="" onChange={(e) => { this.changeHandler(e) }} />
                    <button type="submit" onClick="">Add</button>
                </div>
            </div>
        )
    }


}

export default AddButton