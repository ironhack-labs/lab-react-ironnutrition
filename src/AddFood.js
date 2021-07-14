import { Component } from "react";



class NewFood extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            visible: false
        }
    }



    handleInputChange = e => {

        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }



    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)

        this.setState({
            name: '',
            calories: '',
            image: '',
            visible: false
        })
    }


    render() {
        return (
            <div>
                {/* {this.state.visible === true ? <form></form> : null}
                {<button onClick = {() => this.setState({visible: true }) >Add Food</button>
                {
                    this.button.onClick === true ? 
                }} */}
                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Name: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </label>

                    <label>
                        Calories: <input type="text" value={this.state.calories} onChange={this.handleInputChange} name="calories" />
                    </label>

                    <label>
                        Image: <input type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </label>

                    <input type="submit" value="Create Food" />
                </form>
            </div>

        )
    }
}


export default NewFood