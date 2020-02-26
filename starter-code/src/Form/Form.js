import React from "react";
import "./Form.css"

export default class Form extends React.Component {

    state = {
        image: "",
        name: "",
        calories: "",
        quantity: 1
    };

    updateForm(e) {
        const { name, value } = e.target
        console.log(e.target)
        this.setState({
            [name]: value
        });
    }

    sendForm(e) {
        e.preventDefault();
        // console.log(this.state)
        this.props.addFood(this.state)
        this.setState({
            image: "",
            name: "",
            calories: "",
            quantity: 1
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                    onChange={e => this.updateForm(e)}
                />
                <input
                    type="text"
                    placeholder="calories"
                    value={this.state.calories}
                    name="calories"
                    onChange={e => this.updateForm(e)}
                />
                <input
                    type="text"
                    placeholder="image"
                    value={this.state.image}
                    name="image"
                    onChange={e => this.updateForm(e)}
                />
                <input type="submit" value={"Send form"} onClick={e => this.sendForm(e)} />
            </form>
        )
    }
}