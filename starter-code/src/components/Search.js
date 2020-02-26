import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        query: ""
    }

    handleChange = e => {
        e.preventDefault();
        let { value, name  } = e.target;
        this.props.filterList(value);
        this.setState({ [name]: value });
        

    };

    render() {
        return (
            <div>
                <form>
                <input
                    type="text"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                </form>
            </div>
        )
    }
}
