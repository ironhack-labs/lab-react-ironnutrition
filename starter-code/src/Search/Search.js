import React from "react";
import "./Search.css"

export default class Search extends React.Component {

    state = {
        image: "",
        name: "",
        calories: "",
        quantity: 1
    };

    updateForm(e) {
        const { name, value } = e.target
        console.log(value)
        this.props.searchFood(value)
        this.setState({
            [name]: value
        });  
    }

    // sendForm(e) {
        // e.preventDefault();
        // console.log(this.state)
        // this.setState({
        //     image: "",
        //     name: "",
        //     calories: "",
        //     quantity: 1
        // })
    // }

    render() {
        return (
            <form>
                <input
                    type="search"
                    placeholder="Type Search"
                    value={this.state.name}
                    name="name"
                    onChange={e => this.updateForm(e)}
                />
                {/* <input
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
                <input type="submit" value={"Send form"} onClick={e => this.sendForm(e)} /> */}
            </form>
        )
    }
}