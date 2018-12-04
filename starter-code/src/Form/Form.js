import React from 'react';
import "./Form.css"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            calories: "",
            image: ""
        }
    }
    handleNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleCaloriesInput = (e) => {
        this.setState({
            calories: e.target.value
        })
    }


    render() {
        return (
            <div>

                <form>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)} /> <br /><br />

                    <label>Number of Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} /><br /><br />

                    <label>Image:</label>
                    <input type="file" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)} /><br /><br />

                    <input type="submit" value="Submit" /><br /><br />
                </form>
            </div>
        );
    }
}

export default Form;