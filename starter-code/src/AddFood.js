import React, { Component } from 'react';



class AddFood extends Component {

    state = {
        name: '',
        calories: '',
        quantity: '',
        image: ''
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onNewFood(this.state.name, this.state.calories, this.state.quantity, this.state.image)
    }

    // changeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // changePopularity = (event) => {
    //     this.setState({
    //         popularity: event.target.value
    //     })
    // }

    changeHandler = (event) => {
        const inputName = event.target.name
        this.setState({
            [inputName]: event.target.value
        })
    }
    render() {



        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <p>Add a food:</p>
                    <input name="name" placeholder="name"
                        onChange={this.changeHandler}
                        value={this.state.name}></input> <br></br>
                    <input name="calories" placeholder="calories"
                        onChange={this.changeHandler}
                        value={this.state.calories}></input> <br></br>
                    <input name="quantity" placeholder="quantity"
                        onChange={this.changeHandler}
                        value={this.state.quantity}></input> <br></br>
                    <input name="image" placeholder="image"
                        onChange={this.changeHandler}
                        value={this.state.image}></input> <br></br>
                    <button type="submit">SUBMIT</button>
                </form>
            </div >
        );
    }
}

export default AddFood;
