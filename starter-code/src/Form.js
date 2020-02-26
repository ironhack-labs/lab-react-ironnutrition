import React, { Component } from 'react';

export default class Form extends React.Component {

    updateForm(e, field) {
        this.setState({
            ...this.state,
            [field]: e.target.value
        });
    }

    sendForm(e) {
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
                    value={this.props.name}
                    onChange={e => this.updateForm(e, "name")}
                />

                <input
                    type="number"
                    placeholder="calories"
                    // max="50"
                    value={this.props.calories}
                    onChange={e => this.updateForm(e, "calories")}
                />
                <input
                    type="text"
                    placeholder="image"
                    value={this.props.image}
                    onChange={e => this.updateForm(e, "image")}
                />
                <input type="submit" value={"Send form"} onClick={e => this.sendForm(e)} />


            </form>
        )
    }
}